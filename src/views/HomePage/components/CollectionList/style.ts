import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';
import { motion, Reorder } from 'framer-motion';
import { Button } from '../../../../components/Button';
import { isPropertySignature } from 'typescript';

export const CollectionsWrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const CollectionsList = styled(Reorder.Group)<{ sortingMode: boolean }>`
  display: flex;
  flex-flow: row;
  max-width: 100%;
  height: 100%;
  -moz-scrollbars-horizontal: touch;
  background: ${(props) =>
    props.sortingMode ? props.theme.colors.gradient : 'none'};
  border-radius: 10px;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  position: relative;
`;
export const ListReorderButton = styled(Button)<{ sortingMode: boolean }>`
  border-radius: 10px;
  background: ${(props) => !props.sortingMode && 'none'};
  color: ${(props) => props.theme.colors.primaryText};
  @media only screen and ${breakpoints.device.sm} {
    display: none;
  }
`;
