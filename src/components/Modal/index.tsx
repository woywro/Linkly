import { RiCloseLine } from "react-icons/ri";
import { Portal } from "../../HOC/Portal";
import { CloseButton, ModalTitle, Overlay, ModalWrapper } from "./style";

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
        <ModalWrapper>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton>
            <RiCloseLine onClick={onClose} />
          </CloseButton>
          {children}
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
};
