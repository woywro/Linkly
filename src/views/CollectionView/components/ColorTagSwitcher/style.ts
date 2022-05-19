import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ColorSwitcherWrapper = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
`;

export const ColorTag = styled(motion.button)<{ background: string }>`
  padding: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  margin: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
`;
