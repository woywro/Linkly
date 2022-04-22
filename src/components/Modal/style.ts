import styled from 'styled-components';
import { Text } from '../Text';
import breakpoints from '../../theme/breakpoints';
import { hoverEffectBg } from '../../mixins/hoverEffects';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors.primaryBgNoTransparent};
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: auto;
  height: auto;
  overflow-y: hidden;
  @media only screen and ${breakpoints.device.sm} {
    width: 95%;
    height: auto;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media only screen and ${breakpoints.device.lg} {
    height: auto;
    padding: 40px;
    min-width: 300px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  top: 0;
  right: 0;
  position: absolute;
  &:hover {
    ${hoverEffectBg}
  }
`;

export const ModalTitle = styled(Text)`
  margin: 10px;
  font-size: 28px;
`;
