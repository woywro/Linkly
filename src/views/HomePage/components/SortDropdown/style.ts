import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const SortDropdownWrapper = styled.div`
  display: none;
  z-index: 31;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
`;

export const IconButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.colors.secondaryBg};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;
