import styled from "styled-components";
import { Text } from "../Text";
import breakpoints from "../../theme/breakpoints";
import { hoverEffectBg } from "../../mixins/hoverEffects";
import { motion } from "framer-motion";

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
  background: ${(props) => props.theme.colors.primaryBg};
  padding: 30px;
  z-index: 1000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 500px;
  overflow-y: hidden;
  @media only screen and ${breakpoints.device.sm} {
    width: 95%;
    max-height: 95%;
    padding: 20px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 95%;
    max-height: 95%;
    padding: 20px;
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
