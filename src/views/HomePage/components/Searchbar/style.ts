import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

export const SearchBarWrapper = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  z-index: 60;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0;
    border-radius: 10px;
    height: 100px;
    width: auto;
    position: relative;
    &:after {
      content: '';
      background: ${(props) => props.theme.colors.gradient};
      width: 100%;
      height: 100%;
      bottom: 50%;
      position: absolute;
      z-index: 1;
    }
  }
`;

export const StyledSearchBar = styled(motion.div)`
  width: 60%;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.primaryBgNoTransparent};
  align-items: center;
  padding: 10px;
  position: relative;
  z-index: 10;
  @media only screen and ${breakpoints.device.sm} {
    width: 90%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 5px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 14px;
  line-height: 21px;
  transition: all 0.3s ease;
  background: none;
  border-radius: 10px;
`;
