import styled, { useTheme } from "styled-components";

const StyledLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
`;

interface Props {
  children: JSX.Element[];
}

export const Links = ({ children }: Props) => {
  return <StyledLinks>{children}</StyledLinks>;
};
