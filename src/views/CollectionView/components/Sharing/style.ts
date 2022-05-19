import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { hoverEffectText } from '../../../../mixins/hoverEffects';
import breakpoints from '../../../../theme/breakpoints';
import { Field, Form } from 'formik';
import { Text } from '../../../../components/Text';
import { InputStyling } from '../../../../components/Input';
import { motion } from 'framer-motion';

export const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  aling-items: center;
  padding: 5px;
`;

export const SharedList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  aling-items: center;
  padding: 10px;
`;

export const SharedEmail = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  &:hover {
    ${hoverEffectText}
  }
  &::after {
    content: 'X';
    position: absolute;
    right: 20px;
  }
  }
`;

export const ShareRequestIndicator = styled.div<{ isAccepted: boolean }>`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background: ${(props) => {
    if (props.isAccepted == true) {
      return props.theme.colors.green;
    } else {
      return props.theme.colors.red;
    }
  }};
`;

export const SharingWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
`;

export const AddButton = styled(Button)`
  padding: 5px 10px;
  border-radius: 10px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  background: ${(props) => props.theme.colors.primaryBg};
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const Error = styled(Text)`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
  padding: 2px;
  position: absolute;
  bottom: -20px;
`;

export const StyledInput = styled(Field)`
  ${InputStyling}
  margin: 0;
  border-radius: 0;
  padding: 10px;
  background: none;
`;
