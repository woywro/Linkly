import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const LinkDropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 80%;
  @media only screen and ${breakpoints.device.sm} {
    justify-content: flex-end;
  }
  @media only screen and ${breakpoints.device.lg} {
    justify-content: flex-end;
  }
`;

export const DropDownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 20px;
`;