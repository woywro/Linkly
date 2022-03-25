import moment from "moment";
import { Text } from "../../../../components/Text";
import { HistoryLinkInterface } from "../../../../types/HistoryLinkInterface";
import { HistoryItemWrapper } from "./style";

interface Props {
  item: HistoryLinkInterface;
}

export const HistoryItem = ({ item }: Props) => {
  return (
    <HistoryItemWrapper>
      <Text bold>{item.title}</Text>
      <Text>{moment(parseInt(item.timestamp)).format("LT")}</Text>
    </HistoryItemWrapper>
  );
};
