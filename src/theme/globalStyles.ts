import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../types/ThemeInterface";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Lato', sans-serif;
  color: ${(props) => props.theme.colors.primaryText};
}
`;
