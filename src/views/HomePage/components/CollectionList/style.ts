import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";
import { Reorder } from "framer-motion";
import { Button } from "../../../../components/Button";

export const CollectionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const CollectionsList = styled(Reorder.Group)`
  display: flex;
  flex-flow: row;
  max-width: 100%;
  height: 100%;
  -moz-scrollbars-horizontal: touch;
  overflow-x: scroll;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;
export const ListReorderButton = styled(Button)<{ sortingMode: boolean }>`
  border-radius: 10px;
  background: ${(props) => !props.sortingMode && "none"};
  @media only screen and ${breakpoints.device.sm} {
    display: none;
  }
`;
