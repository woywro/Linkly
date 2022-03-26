import moment from "moment";
import { Text } from "../../../../components/Text";
import { LinkInterface } from "../../../../types/LinkInterface";
import { HistoryItemWrapper } from "./style";

export const HistoryItem = (item) => {
  return (
    <HistoryItemWrapper>
      <Text bold>{item.title}</Text>
      <Text>{moment(parseInt(item.timestamp)).format("LT")}</Text>
    </HistoryItemWrapper>
  );
};
