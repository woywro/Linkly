import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

export const FeedWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 150px);
  justify-content: start;
  gap: 5px;
  align-items: start;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;
