import { Button } from "../Button";
import { CgDetailsMore } from "react-icons/cg";
import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const CloseWrapperButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>x</StyledButton>;
};

const StyledButton = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
  }
`;
