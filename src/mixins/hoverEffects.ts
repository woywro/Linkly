import { css } from "styled-components";
export const hoverEffectBg = css`
  background: ${(props) => props.theme.colors.secondaryBg};
`;
export const hoverEffectText = css`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.primary};
  text-decoration-thickness: 3px;
`;
