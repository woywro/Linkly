import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { EmptyState } from "../../../../components/EmptyState";
import { InputStyling } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { updateShareStatus } from "../../../../redux/actions/CollectionActions";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { ShareRequestInterface } from "../../../../types/ShareRequestInterface";
import { FriendsAutocomplete } from "../FriendsAutocomplete";
import {
  AddButton,
  AddWrapper,
  SharedEmail,
  SharedList,
  SharingWrapper,
} from "./style";

interface Props {
  collection: CollectionInterface;
}

interface SharedListInterface {
  email: string;
  isAccepted: boolean;
}

export const Sharing = ({ collection }: Props) => {
  const router = useRouter();
  const [sharedList, setSharedList] = useState<SharedListInterface[] | []>([]);
  const dispatch = useDispatch();
  const [friends, setFriends] = useState<string[] | []>([]);

  useEffect(() => {
    if (collection.shareRequests?.length !== 0) {
      const sharedWith: SharedListInterface[] = [];
      collection.shareRequests?.map((request: ShareRequestInterface) => {
        sharedWith.push({
          email: request.receiverEmail,
          isAccepted: request.isAccepted,
        });
      });
      setSharedList(sharedWith);
    }
  }, [collection, router]);

  const handleAdd = useCallback(
    (email: string) => {
      axios
        .post("/api/createShareRequest", {
          collectionId: router.query.collectionId,
          email: email,
        })
        .then(() => {
          setSharedList([...sharedList, { email: email, isAccepted: false }]);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      dispatch(
        updateShareStatus(collection.id, {
          email: email,
          collectionId: collection.id,
        })
      );
    },
    [router, sharedList]
  );

  const handleDelete = (e) => {
    axios.post("/api/deleteShareRequest", {
      email: e,
      collectionId: router.query.collectionId,
    });
    const listFiltered = sharedList.filter((x) => x.email !== e);
    setSharedList(listFiltered);
    dispatch(updateShareStatus(collection.id, listFiltered));
  };

  const handleSearch = (toSearch: string) => {
    setFriends([]);
    console.log(toSearch);
    axios
      .get("/api/getFriends", {
        params: {
          search: toSearch,
        },
      })
      .then((res) => {
        const friends = res.data.result.map((e) => e.receiverEmail);
        let uniqueFriends = [...new Set(friends)];
        setFriends(uniqueFriends);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .min(3, "email is too short!")
      .required("email is required"),
  });

  return (
    <SharingWrapper>
      <AddWrapper>
        <Button onClick={handleGetFriends}>get</Button>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            handleAdd(values.email);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <StyledForm
              autocomplete="off"
              onChange={() => {
                handleSearch(values.email);
              }}
            >
              <InputWrapper>
                <StyledInput name="email" placeholder="email" />
                <FriendsAutocomplete
                  friend={values.email}
                  friends={friends}
                  setFieldValue={setFieldValue}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </InputWrapper>
              <AddButton type="submit">+</AddButton>
            </StyledForm>
          )}
        </Formik>
      </AddWrapper>
      <Scrollbars
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SharedList>
          {sharedList.length > 0 ? (
            sharedList.map((e) => {
              return (
                <SharedEmail
                  onClick={() => handleDelete(e.email)}
                  isAccepted={e.isAccepted}
                >
                  {e.email}
                </SharedEmail>
              );
            })
          ) : (
            <EmptyState msg="add people to start sharing this collection!" />
          )}
        </SharedList>
      </Scrollbars>
    </SharingWrapper>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  position: relative;
`;

const Error = styled(Text)`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
  padding: 5px;
  position: absolute;
  top: 100%;
`;

const StyledInput = styled(Field)`
  ${InputStyling}
  margin: 0;
  padding: 10px;
  background: ${(props) => props.theme.colors.primaryBg};
`;
