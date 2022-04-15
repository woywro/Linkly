import moment from "moment";
import { useCallback } from "react";
import { Text } from "../../../../components/Text";
import { HistoryInterface } from "../../../../types/HistoryInterface";
import { HistoryItemWrapper } from "./style";

interface Props {
  item: HistoryInterface;
}

export const HistoryItem = ({ item }: Props) => {
  const handleClick = useCallback(() => {
    window.open(item.link.url, "_blank");
  }, [item]);

  return (
    <HistoryItemWrapper onClick={handleClick}>
      <Text style={{ wordBreak: "break-all", width: "50%" }} bold>
        {item.link.title}
      </Text>
      <Text>{moment(parseInt(item.timestamp)).format("LT")}</Text>
    </HistoryItemWrapper>
  );
};
