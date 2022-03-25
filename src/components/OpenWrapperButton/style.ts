import breakpoints from "../../theme/breakpoints";
import { Button } from "../Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
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
