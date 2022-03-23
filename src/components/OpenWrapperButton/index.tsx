import { Button } from "../Button";
import { CgDetailsMore } from "react-icons/cg";
import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const OpenWrapperButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <CgDetailsMore size={25} />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    position: absolute;
    bottom: 10px;
    padding: 15px;
    right: 10px;
    z-index: 20;
  }
`;
