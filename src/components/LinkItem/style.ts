import styled from "styled-components";
import { hoverEffectBg, hoverEffectText } from "../../mixins/hoverEffects";
import { Text } from "../Text";
import breakpoints from "../../theme/breakpoints";

export const Wrapper = styled.div`
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

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    ${hoverEffectText}
  }
`;

export const Name = styled(Text)`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const MoreButton = styled.button`
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
