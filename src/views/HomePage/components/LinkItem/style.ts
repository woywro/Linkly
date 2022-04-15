import styled from "styled-components";
import {
  hoverEffectBg,
  hoverEffectText,
} from "../../../../mixins/hoverEffects";
import { Text } from "../../../../components/Text";
import breakpoints from "../../../../theme/breakpoints";
import { motion } from "framer-motion";

export const LinkWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  gap: 10px;
  word-break: break-all;
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
  width: 100%;
  height: 100%;
  flex-shrink: 5;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    ${hoverEffectText}
  }
`;

export const Name = styled(Text)`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const FieldText = styled(Text)`
  word-break: break-word;
`;

export const LinkMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondaryText};
`;
