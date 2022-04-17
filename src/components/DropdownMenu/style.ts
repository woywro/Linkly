import styled from "styled-components";
import { hoverEffectBg } from "../../mixins/hoverEffects";
import breakpoints from "../../theme/breakpoints";

export const DropdownMenuWrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: auto;
  display: flex;
  justify-content: flex-start;
  &:hover {
    ${hoverEffectBg}
  }
`;

export const DropdownItemList = styled.div<{
  show: boolean;
  fullWidth?: boolean;
}>`
  justify-content: center;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  padding: 10px;
  height: auto;
  background: ${(props) => props.theme.colors.primaryBgNoTransparent};
  box-shadow: ${(props) => props.theme.shadow};
  display: ${(props) => (props.show ? "flex" : "none")};
  z-index: 40;
  width: 30%;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 60%;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 20;
`;
