import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

export const SugestionsWrapper = styled.ul`
  width: 100%;
  background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  position: absolute;
  color: black;
  top: 100%;
  overflow-y: scroll;
  margin: 0;
  max-height: 100px;
  left: 0;
  z-index: 50;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;

export const Suggestion = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`;
