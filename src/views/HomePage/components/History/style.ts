import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const HistoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  @media only screen and ${breakpoints.device.sm} {
    overflow-y: scroll;
  }
`;
