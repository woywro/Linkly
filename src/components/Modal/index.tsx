import styled from "styled-components";
import { createPortal } from "react-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

export const Modal = ({ open, onClose, children }: Props) => {
  if (!open) return null;
  return createPortal(
    <Overlay>
      <StyledModal>
        <button onClick={onClose}>close</button>
        {children}
      </StyledModal>
    </Overlay>,
    document.getElementById("portal")
  );
};
