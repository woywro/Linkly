import { RiCloseCircleLine } from "react-icons/ri";
import { Portal } from "../../HOC/Portal";
import { CloseButton, ModalTitle, Overlay, StyledModal } from "./style";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, open, onClose, children }: Props) => {
  if (!open) return null;
  return (
    <Portal selector="#portal">
      <Overlay>
        <StyledModal>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton>
            <RiCloseCircleLine onClick={onClose} />
          </CloseButton>
          {children}
        </StyledModal>
      </Overlay>
    </Portal>
  );
};
