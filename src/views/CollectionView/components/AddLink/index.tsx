import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import styled from 'styled-components';
import { useDispatch, useStore } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { updateCollections } from '../../../../redux/actions/CollectionActions';
import { addLink } from '../../../../redux/actions/LinkActions';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { LinkInterface } from '../../../../types/LinkInterface';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { InputStyling } from '../../../../components/Input';
import { Text } from '../../../../components/Text';
import { Divider } from '../../../style';

interface Props {
  collectionValue?: string;
  links: LinkInterface[];
  setLinks: (arg0: LinkInterface[]) => void;
}

export const AddLink = ({ collectionValue, links, setLinks }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAdd = async (title, url) => {
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
            <AddButton type="submit">+</AddButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

const AddButton = styled.button`
  border: none;
  padding: 10px;
  background: none;
  cursor: pointer;
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: none;
  padding: 10px;
  flex-flow: column;
`;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-flow: row;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Error = styled(Text)`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
  padding: 5px;
`;

const StyledInput = styled(Field)`
  ${InputStyling}
  background: none;
`;
