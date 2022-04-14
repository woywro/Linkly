import { requestFinished, requestStarted } from "./RequestsLoadingActions";
import axios from "axios";
import { SharedWithYouInterface } from "../../types/SharedWithYouInterface";

export const getShareRequests = () => {
  return function (dispatch) {
    dispatch(requestStarted("getShareRequests"));
    axios.get("/api/getShareRequests").then((res) => {
      const shareRequests: SharedWithYouInterface[] = [];
      res.data.result.shareRequestsReceived.map(
        (shareRequest: SharedWithYouInterface) => {
          shareRequests.push(shareRequest);
        }
      );
      dispatch(setShareRequests(shareRequests));
      dispatch(requestFinished("getShareRequests"));
    });
  };
};

export const setShareRequests = (shareRequests: SharedWithYouInterface[]) => ({
  type: "SET_SHAREREQUESTS",
  payload: {
    shareRequests,
  },
});

export const deleteShareRequest = (id: string) => ({
  type: "DELETE_SHAREREQUEST",
  payload: {
    id,
  },
});
