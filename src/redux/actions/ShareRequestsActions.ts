import axios from 'axios';
import { ShareRequestInterface } from '../../types/ShareRequestInterface';
import { requestFinished, requestStarted } from './RequestsLoadingActions';

export const getShareRequests = () => {
  return function (dispatch) {
    dispatch(requestStarted('getShareRequests'));
    axios.get('/api/getShareRequests').then((res) => {
      const shareRequests: ShareRequestInterface[] = [];
      res.data.result.map((shareRequest: ShareRequestInterface) => {
        shareRequests.push(shareRequest);
      });
      dispatch(setShareRequests(shareRequests));
      dispatch(requestFinished('getShareRequests'));
    });
  };
};

export const setShareRequests = (shareRequests: ShareRequestInterface[]) => ({
  type: 'SET_SHAREREQUESTS',
  payload: {
    shareRequests,
  },
});

export const deleteShareRequest = (id: string) => ({
  type: 'DELETE_SHAREREQUEST',
  payload: {
    id,
  },
});
