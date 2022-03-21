import styled from "styled-components";
import { css } from "styled-components";
import breakpoints from "../../theme/breakpoints";
export const Container = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 70%;
  width: auto;
  margin: 20px;
`;

export const Item = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 20px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryText};
  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    `};
  &:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  height: 50%;
`;

export const LogoutBtn = styled(Item)`
  position: absolute;
  bottom: 30px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
`;
