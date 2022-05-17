import styled from 'styled-components';
import { Form, Field } from 'formik';
import { InputStyling } from '../../../../components/Input';
import { Text } from '../../../../components/Text';

export const AddButton = styled.button`
  border: none;
  padding: 10px;
  background: none;
  cursor: pointer;
  font-size: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: none;
  padding: 10px;
  flex-flow: column;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-flow: row;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const Error = styled(Text)`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
  padding: 5px;
`;

export const StyledInput = styled(Field)`
  ${InputStyling}
  background: none;
`;
