import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';
export const StyledLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  @media only screen and ${breakpoints.device.lg} {
    padding: 0px;
  }
`;
