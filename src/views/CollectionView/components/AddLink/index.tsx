import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { RiAddCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { updateCollections } from '../../../../redux/actions/CollectionActions';
import { addLink } from '../../../../redux/actions/LinkActions';
import { LinkInterface } from '../../../../types/LinkInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { Divider } from '../../../style';
import {
  AddButton,
  Error,
  InputWrapper,
  StyledForm,
  StyledInput,
  Wrapper,
} from './style';

interface Props {
  collectionValue?: string;
  links: LinkInterface[];
  setLinks: (arg0: LinkInterface[]) => void;
}

export const AddLink = ({ collectionValue, links, setLinks }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme() as ThemeInterface;
  const handleAdd = async (title: string, url: string) => {
    const collectionValues = [collectionValue];
    await axios
      .post('/api/addLink', {
        title,
        url,
        collectionValues,
      })
      .then((res) => {
        dispatch(addLink(res.data));
        dispatch(updateCollections(res.data.collections));
        const newLinks: LinkInterface[] = [res.data, ...links];
        setLinks(newLinks);
      });
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'title is too short!')
      .max(30, 'title is too long!')
      .required('title is required'),
    url: Yup.string()
      .url()
      .min(3, 'url is too short!')
      .required('url is required'),
  });

  return (
    <Wrapper>
      <Divider />
      <Formik
        initialValues={{
          title: '',
          url: '',
        }}
        onSubmit={(values, { resetForm }) => {
          handleAdd(values.title, values.url);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <StyledForm autoComplete="off">
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
            <AddButton type="submit">
              <RiAddCircleLine style={{ fill: theme.colors.secondary }} />
            </AddButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
