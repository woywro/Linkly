import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import { motion } from 'framer-motion';

export const FeedItemWrapper = styled(motion.div)<{ color: string }>`
  padding: 20px;
  display: flex;
  font-size: 50px;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Name = styled(Text)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Timestamp = styled(Text)`
  color: ${(props) => props.theme.colors.secondaryText};
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
`;
