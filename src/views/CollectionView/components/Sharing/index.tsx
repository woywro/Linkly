import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { EmptyState } from '../../../../components/EmptyState';
import { Text } from '../../../../components/Text';
import { updateCollection } from '../../../../redux/actions/CollectionActions';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { ShareRequestInterface } from '../../../../types/ShareRequestInterface';
import { FriendsAutocomplete } from '../FriendsAutocomplete';
import {
  AddButton,
  AddWrapper,
  Error,
  InputWrapper,
  SharedEmail,
  SharedList,
  ShareRequestIndicator,
  SharingWrapper,
  StyledForm,
  StyledInput,
} from './style';

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

  const handleAdd = (email: string) => {
    axios
      .post('/api/createShareRequest', {
        collectionId: router.query.collectionId,
        email: email,
      })
      .then((res) => {
        setSharedList([...sharedList, { email: email, isAccepted: false }]);
        dispatch(updateCollection(res.data.collection));
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const handleDelete = (e: string) => {
    axios
      .post('/api/deleteShareRequest', {
        email: e,
        collectionId: router.query.collectionId,
      })
      .then((res) => {
        const listFiltered = sharedList.filter((x) => x.email !== e);
        setSharedList(listFiltered);
        dispatch(updateCollection(res.data.collection));
      });
  };

  const handleSearch = (toSearch: string) => {
    setFriends([]);
    axios
      .get('/api/getFriends', {
        params: {
          search: toSearch,
        },
      })
      .then((res) => {
        const friends: string[] = res.data.result.map(
          (e: ShareRequestInterface) => e.receiverEmail
        );
        let uniqueFriends: string[] = [...new Set(friends)];
        setFriends(uniqueFriends);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .min(3, 'email is too short!')
      .required('email is required'),
  });

  return (
    <SharingWrapper>
      <AddWrapper>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values, { resetForm }) => {
            handleAdd(values.email);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <StyledForm
              autoComplete="off"
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
              <AddButton type="submit">add</AddButton>
            </StyledForm>
          )}
        </Formik>
      </AddWrapper>
      <SharedList>
        {sharedList.length > 0 ? (
          sharedList.map((e) => {
            return (
              <SharedEmail
                onClick={() => handleDelete(e.email)}
                key={e.email}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ShareRequestIndicator isAccepted={e.isAccepted} />
                <Text> {e.email}</Text>
              </SharedEmail>
            );
          })
        ) : (
          <EmptyState msg="add people to start sharing this collection!" />
        )}
      </SharedList>
    </SharingWrapper>
  );
};
