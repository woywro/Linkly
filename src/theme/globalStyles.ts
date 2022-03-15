import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Lato', sans-serif;
  color: ${(props) => props.theme.colors.primaryText};
}
`;
