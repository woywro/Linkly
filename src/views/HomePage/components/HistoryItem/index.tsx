import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { LinkInterface } from "../../../../types/LinkInterface";
import moment from "moment";
import { HistoryLinkInterface } from "../../../../types/HistoryLinkInterface";
import { hoverEffectText } from "../../../../mixins/hoverEffects";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
interface Props {
  item: HistoryLinkInterface;
}

export const HistoryItem = ({ item }: Props) => {
  return (
    <Wrapper>
      <Text bold>{item.title}</Text>
      <Text>{moment(parseInt(item.timestamp)).format("LT")}</Text>
    </Wrapper>
  );
};
