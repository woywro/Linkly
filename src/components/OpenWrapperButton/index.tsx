import { CgDetailsMore } from "react-icons/cg";
import { StyledButton } from "./style";

export const OpenWrapperButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} whileTap={{ scale: 0.9 }}>
      <CgDetailsMore size={25} />
    </StyledButton>
  );
};
