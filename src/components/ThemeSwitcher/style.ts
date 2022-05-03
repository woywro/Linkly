import breakpoints from '../../theme/breakpoints';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ThemeExpandButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  bottom: 0;
  padding: 2px;
  cursor: pointer;
  @media only screen and ${breakpoints.device.sm} {
    bottom 5px;
  }
  @media only screen and ${breakpoints.device.lg} {
    bottom 5px;

  }
`;

export const Row = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div<{ isVisible?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  width: 100%;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;

export const ThemeSwitcherWrapper = styled.div<{ isVisible?: boolean }>`
  background: ${(props) =>
    props.isVisible ? props.theme.colors.primaryBg : 'none'};
  height: ${(props) => (props.isVisible ? '100%' : 'auto')};
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
  border-radius: 20px;
  padding-bottom: 16px;
  bottom: 0;
  @media only screen and ${breakpoints.device.sm} {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 20px;
    position: static;
  }
  @media only screen and ${breakpoints.device.lg} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 20px;
    position: static;
  }
`;

export const ThemeChoiceButton = styled(motion.button)<{ background: string }>`
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
`;
