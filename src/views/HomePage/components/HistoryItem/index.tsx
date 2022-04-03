import moment from "moment";
import { useCallback } from "react";
import { Text } from "../../../../components/Text";
import { HistoryInterface } from "../../../../types/HistoryInterface";
import { LinkInterface } from "../../../../types/LinkInterface";
import { HistoryItemWrapper } from "./style";

interface Props {
  item: HistoryInterface;
}

export const HistoryItem = ({ item }: Props) => {
  const handleClick = useCallback(
    (item) => {
      window.open(item.url, "_blank");
    },
    [item]
  );

  return (
    <HistoryItemWrapper onClick={handleClick}>
      <Text bold>{item.link.title}</Text>
      <Text>{moment(parseInt(item.timestamp)).format("LT")}</Text>
    </HistoryItemWrapper>
  );
};
