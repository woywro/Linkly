import { Button } from "../Button";
import { CgDetailsMore } from "react-icons/cg";
import styled from "styled-components";

export const OpenWrapperButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <CgDetailsMore />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 20;
`;
