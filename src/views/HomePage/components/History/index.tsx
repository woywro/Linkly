import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { HistoryItem } from "../HistoryItem";
import { HistoryWrapper } from "./style";
import axios from "axios";
import { useCallback, useState } from "react";
import { setHistory, setLinks } from "../../../../redux/actions";
import { Button } from "../../../../components/Button";
import { useEffect } from "react";
import useLoading from "../../../../hooks/useLoading";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";

export const History = () => {
  const History = useSelector((state: RootState) => state.history);
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const loading = useLoading(requests, "getHistory");

  const handleLoadMore = useCallback(() => {
    // setLoading(true);
    axios
      .get("/api/getHistory", {
        params: { cursor: History[History.length - 1].timestamp },
      })
      .then((res) => {
        dispatch(setHistory(History.concat(res.data.history)));
        // setLoading(false);
      });
  }, [History]);

  return (
    <HistoryWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : History.length == 0 ? (
        <EmptyState msg="Recently used links will appear here" />
      ) : (
        <>
          <Title>History</Title>
          {History.map((e) => {
            return <HistoryItem item={e} />;
          })}
          {loading && <div>loading</div>}
          <Button onClick={handleLoadMore}>Load more</Button>
        </>
      )}
    </HistoryWrapper>
  );
};
