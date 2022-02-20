import styled from "styled-components";
import { createPortal } from "react-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { Text } from "../Text";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
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
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 500px;
  height: 500px;
`;

const CloseButton = styled.button`
  background: none;
  padding: 5px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  top: 0;
  right: 0;
  position: absolute;
`;

const ModalTitle = styled(Text)`
  margin: 5px;
`;

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, open, onClose, children }: Props) => {
  if (!open) return null;
  return createPortal(
    <Overlay>
      <StyledModal>
        <ModalTitle size="big">{title}</ModalTitle>
        <CloseButton>
          <RiCloseCircleLine onClick={onClose} />
        </CloseButton>
        {children}
      </StyledModal>
    </Overlay>,
    document.getElementById("portal")
  );
};
