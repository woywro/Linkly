import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import { motion } from 'framer-motion';
import { Reorder } from 'framer-motion';

export const CollectionWrapper = styled(Reorder.Item)<{ sortingMode: boolean }>`
  padding: 5px;
  display: flex;
  height: 120px;
  margin: 5px;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  flex-flow: column;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) =>
    props.sortingMode ? props.theme.colors.primary : 'none'};
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

export const ColorTag = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  left: 0;
  background: ${(props) => props.color};
`;
