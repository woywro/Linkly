import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";
import {
  hoverEffectBg,
  hoverEffectText,
} from "../../../../mixins/hoverEffects";
import { motion } from "framer-motion";

export const SortBarWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primaryBg};
  z-index: 5;
  @media only screen and ${breakpoints.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoints.device.lg} {
    gap: 20px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  position: relative;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const IconButton = styled(motion.button)`
  border: none;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.colors.primaryBg};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    ${hoverEffectBg}
  }
`;

export const TextInput = styled.input`
  border: none;
  font-size: 16px;
  background: ${(props) => props.theme.colors.primaryBg};
`;

export const Field = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;
  &:hover {
    ${hoverEffectText}
  }
`;
