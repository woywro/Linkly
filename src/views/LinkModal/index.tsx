import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Button } from "../../components/Button";
import { InputStyling } from "../../components/Input";
import { Text } from "../../components/Text";
import { updateCollections } from "../../redux/actions/CollectionActions";
import { addLink } from "../../redux/actions/LinkActions";
import { CollectionInterface } from "../../types/CollectionInterface";
import { CollectionsSelect } from "../../components/CollectionsSelect";
import { AddLinkWrapper } from "./style";
import { LinkInterface } from "../../types/LinkInterface";
import { updateLink } from "../../redux/actions/LinkActions";

interface Props {
  link?: LinkInterface;
}

export const LinkModal = ({ link }: Props) => {
  const [collections, setCollections] = useState<CollectionInterface[] | []>(
    []
  );

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (link !== undefined) {
      setInputValues(link);
    }
  }, [link]);

  const setInputValues = useCallback(
    (link) => {
      setCollections(link.collections);
    },
    [link, collections]
  );

  const handleSaveLinkOnEdit = useCallback(
    async (title: string, url: string) => {
      await axios
        .post("/api/updateLink", {
          id: link?.id,
          title: title,
          url: url,
          collections: collections,
        })
        .then((res) => {
          dispatch(updateLink(res.data));
          dispatch(updateCollections(res.data.collections));
        });
      router.back();
    },
    [link, collections]
  );

  const handleAdd = useCallback(
    async (title: string, url: string) => {
      await axios
        .post("/api/addLink", {
          title,
          url,
          collections,
        })
        .then((res) => {
          dispatch(addLink(res.data));
          dispatch(updateCollections(res.data.collections));
        });
      router.back();
    },
    [link, collections]
  );

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "title is too short!")
      .max(50, "title is too long!")
      .required("title is required"),
    url: Yup.string()
      .url()
      .min(3, "url is too short!")
      .max(50, "url is too long!")
      .required("url is required"),
  });

  return (
    <AddLinkWrapper>
      <Formik
        initialValues={{
          title: link !== undefined ? link.title : "",
          url: link !== undefined ? link.url : "",
        }}
        onSubmit={(values) => {
          if (router.pathname == "/addLink") {
            handleAdd(values.title, values.url);
          } else {
            handleSaveLinkOnEdit(values.title, values.url);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <InputWrapper>
              <StyledInput name="title" placeholder="Link title" />
              {errors.title && touched.title ? (
                <Error>{errors.title}</Error>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <StyledInput name="url" placeholder="Website url" />
              {errors.url && touched.url ? <Error>{errors.url}</Error> : null}
            </InputWrapper>
            <CollectionsSelect
              setCollections={setCollections}
              collections={collections}
            />
            <Button type="submit">SAVE</Button>
          </StyledForm>
        )}
      </Formik>
    </AddLinkWrapper>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 80px;
`;

const Error = styled(Text)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  padding: 5px;
`;

const StyledInput = styled(Field)`
  ${InputStyling}
`;
