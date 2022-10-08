import styled from 'styled-components';
import { css } from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const Input = styled.input`
  border: none;
  background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const InputStyling = css`
  border: none;
  background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media only screen and ${breakpoints.device.sm} {
    padding: 20px;
  }
`;
