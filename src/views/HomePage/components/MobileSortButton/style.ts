import { Button } from "../../../../components/Button";
import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const MobileSortButtonWrapper = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
export const MobileSortButtonIcon = styled.div`
  margin-left: 5px;
`;
