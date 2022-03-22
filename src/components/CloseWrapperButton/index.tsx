import { Button } from "../Button";
import { CgDetailsMore } from "react-icons/cg";
import styled from "styled-components";

export const CloseWrapperButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>x</StyledButton>;
};

const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 20;
`;
