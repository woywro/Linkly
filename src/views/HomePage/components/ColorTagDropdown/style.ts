import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

export const ColorTag = styled.div<{ color: string }>`
  padding: 10px;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  background: ${(props) => props.color};
  cursor: pointer;
  border-radius: 20px;
  @media only screen and ${breakpoints.device.sm} {
    width: 25px;
    height: 25px;
    margin: 4px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 25px;
    height: 25px;
  }
`;
