import { CgDetailsMore } from "react-icons/cg";
import { StyledButton } from "./style";

export const OpenWrapperButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <CgDetailsMore size={25} />
    </StyledButton>
  );
};
