import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { generateHistory } from "../../../../utils/generateHistory";
import { Title } from "../../../style";
import { HistoryItem } from "../HistoryItem";
import { HistoryWrapper } from "./style";

export const History = () => {
  const History = useSelector((state: RootState) => state.history);
  const Links = useSelector((state: RootState) => state.links);

  const [history, setHistory] = useState([]);

  const setFetchedHistory = useCallback(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory);
  }, [History, Links]);

  useEffect(() => {
    setFetchedHistory();
  }, [History]);

  return (
    <HistoryWrapper>
      {history.length == 0 ? (
        <EmptyState msg="Recently used links will appear here" />
      ) : (
        <>
          <Title>History</Title>
          {history.map((e) => {
            return <HistoryItem item={e} />;
          })}
        </>
      )}
    </HistoryWrapper>
  );
};
