import styled from "styled-components";
import { Text } from "../Text";
import breakpoints from "../../theme/breakpoints";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 500px;
  height: 500px;
  @media only screen and ${breakpoints.device.sm} {
    width: 95%;
    height: 55%;
    padding: 20px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 95%;
    height: auto;
    padding: 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  padding: 5px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  top: 0;
  right: 0;
  position: absolute;
`;

export const ModalTitle = styled(Text)`
  margin: 5px;
  font-size: 28px;
`;
