import { motion } from 'framer-motion';
import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const StyledButton = styled(motion.button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    position: absolute;
    bottom: 15px;
    padding: 15px;
    right: 15px;
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: 20px;
    z-index: 100;
  }
`;
