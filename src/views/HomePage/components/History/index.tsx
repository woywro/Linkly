import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components/Button';
import { EmptyState } from '../../../../components/EmptyState';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import useLoading from '../../../../hooks/useLoading';
import { setHistory } from '../../../../redux/actions/HistoryActions';
import { RootState } from '../../../../redux/store';
import { HistoryInterface } from '../../../../types/HistoryInterface';
import { Title } from '../../../style';
import { HistoryItem } from '../HistoryItem';
import { HistoryWrapper } from './style';

export const History = () => {
  const History = useSelector((state: RootState) => state.history);
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const dispatch = useDispatch();
  const [loadingText, setLoadingText] = useState('load more');
  const loading = useLoading(requests, 'getHistory');

  const handleLoadMore = () => {
    setLoadingText('loading');
    axios
      .get('/api/getHistory', {
        params: { cursor: History[History.length - 1].timestamp },
      })
      .then((res) => {
        dispatch(setHistory(History.concat(res.data.history)));
        setLoadingText('load more');
      });
  };

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
            return <HistoryItem item={e} key={e.timestamp} />;
          })}
          <Button whileTap={{ scale: 0.9 }} onClick={handleLoadMore}>
            {loadingText}
          </Button>
        </>
      )}
    </HistoryWrapper>
  );
};
