import breakpoints from "../../theme/breakpoints";
import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  @media only screen and ${breakpoints.device.sm} {
    overflow: hidden;
    padding: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-flow: column;
    background-color: ${(props) => props.theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow; hidden;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
  }
  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  display: flex;
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  text-decoration: none;
  font-size: 24px;
  color: white;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
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

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  top: 10px;
  right: 10px;
  color: white;
  position: absolute;
  font-size: 25px;
  cursor: pointer;
`;