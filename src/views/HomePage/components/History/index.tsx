import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { HistoryItem } from "../HistoryItem";
import { HistoryWrapper } from "./style";

export const History = () => {
  const History = useSelector((state: RootState) => state.history);

  return (
    <HistoryWrapper>
      {History.length == 0 ? (
        <EmptyState msg="Recently used links will appear here" />
      ) : (
        <>
          <Title>History</Title>
          {History.map((e) => {
            return <HistoryItem item={e} />;
          })}
        </>
      )}
    </HistoryWrapper>
  );
};
