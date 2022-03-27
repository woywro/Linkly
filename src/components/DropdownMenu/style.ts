import styled from "styled-components";
import breakpoints from "../../theme/breakpoints";

export const DropdownMenuWrapper = styled.div<{ show: boolean }>`
  justify-content: center;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  width: 30%;
  height: auto;
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 60%;
  }
`;
