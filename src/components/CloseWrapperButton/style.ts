import { Button } from "../Button";
import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";
export const StyledButton = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 102;
  }
`;
