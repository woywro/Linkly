import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { HistoryItem } from "../HistoryItem";
import { HistoryWrapper } from "./style";
import axios from "axios";
import { useCallback, useState } from "react";
import { setHistory } from "../../../../redux/actions/HistoryActions";
import { Button } from "../../../../components/Button";
import { useEffect } from "react";
import useLoading from "../../../../hooks/useLoading";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { HistoryInterface } from "../../../../types/HistoryInterface";

export const History = () => {
  const History = useSelector((state: RootState) => state.history);
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const dispatch = useDispatch();
  const [loadingList, setLoadingList] = useState(false);
  const loading = useLoading(requests, "getHistory");

  const handleLoadMore = useCallback(() => {
    setLoadingList(true);
    axios
      .get("/api/getHistory", {
        params: { cursor: History[History.length - 1].timestamp },
      })
      .then((res) => {
        dispatch(setHistory(History.concat(res.data.history)));
        setLoadingList(false);
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
          {History.map((e: HistoryInterface) => {
            return <HistoryItem item={e} />;
          })}
          {loadingList && <div>loading</div>}
          <Button whileTap={{ scale: 0.9 }} onClick={handleLoadMore}>
            Load more
          </Button>
        </>
      )}
    </HistoryWrapper>
  );
};
