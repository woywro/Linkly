import { Button } from '../Button';
import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';
export const StyledButton = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    padding: 10px;
    z-index: 102;
  }
`;
