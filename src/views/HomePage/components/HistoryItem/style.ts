import styled from "styled-components";
import { hoverEffectText } from "../../../../mixins/hoverEffects";

export const HistoryItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  opacity: 0.5;
  margin: 5px;
  width: 100%;
  cursor: pointer;
  &:hover {
    ${hoverEffectText}
  }
`;
