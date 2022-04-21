import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import { motion } from 'framer-motion';
import { Reorder } from 'framer-motion';

export const CollectionWrapper = styled(Reorder.Item)`
  padding: 5px;
  display: flex;
  height: 120px;
  margin: 5px;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  flex-flow: column;
  cursor: pointer;
  border-radius: 20px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;

export const SharedIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Icon = styled.div`
  position: relative;
`;

export const Title = styled(Text)`
  margin-top: 5px;
  font-size: 20px;
`;
