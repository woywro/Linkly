import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const SugestionsWrapper = styled.ul`
  width: 60%;
  background: ${(props) => props.theme.colors.secondaryBg};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 16px;
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  position: absolute;
  color: black;
  top: 100%;
  margin: 0;
  max-height: 300px;
  overflow-y: scroll;
  left: 0;
  z-index: 10;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;

export const Suggestion = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  margin: 0;
`;
