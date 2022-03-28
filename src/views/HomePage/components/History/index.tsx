import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { HistoryItem } from "../HistoryItem";
import { HistoryWrapper } from "./style";
import axios from "axios";
import { useCallback } from "react";
import { setHistory, setLinks } from "../../../../redux/actions";
import { Button } from "../../../../components/Button";

export const History = () => {
  const History = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();

  const handleLoadMore = useCallback(() => {
    axios
      .get("/api/getHistory", {
        params: { cursor: History[History.length - 1].timestamp },
      })
      .then((res) => {
        dispatch(setHistory(History.concat(res.data.history)));
      });
  }, [History]);

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
          <Button onClick={handleLoadMore}>Load more</Button>
        </>
      )}
    </HistoryWrapper>
  );
};
