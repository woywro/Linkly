import styled from 'styled-components';
import { css } from 'styled-components';
import breakpoints from '../../theme/breakpoints';
import { Button } from '../Button';
import { motion } from 'framer-motion';
import { Text } from '../Text';

export const NavBarWrapper = styled.nav`
  flex-flow: column;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 100%;
  width: auto;
  padding: 10px;
  @media only screen and ${breakpoints.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoints.device.lg} {
    display: none;
  }
`;

export const Item = styled(motion.button)<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 20px;
  font-size: 24px;
  background: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryText};
  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        border-left: 3px solid ${(props) => props.theme.colors.secondary};
        position: absolute;
        left: 0;
        height: 100%;
        content: '';
        width: 5px;
      }
    `};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
`;

export const LogoutBtn = styled(Button)`
  margin-bottom: 10px;
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
`;

export const NavItemText = styled(Text)`
  margin-left: 4px;
`;
