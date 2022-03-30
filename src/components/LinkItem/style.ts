import styled from "styled-components";
import { hoverEffectBg, hoverEffectText } from "../../mixins/hoverEffects";
import { Text } from "../Text";
import breakpoints from "../../theme/breakpoints";

export const LinkWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    ${hoverEffectBg}
  }
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and ${breakpoints.device.lg} {
    gap: 20px;
  }
`;

export const LinkLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    ${hoverEffectText}
  }
`;
export const LinkDropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 50%;
  @media only screen and ${breakpoints.device.sm} {
    justify-content: flex-end;
  }
  @media only screen and ${breakpoints.device.lg} {
    justify-content: flex-end;
  }
`;

export const Name = styled(Text)`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const LinkMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const DropDownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 20px;
`;
