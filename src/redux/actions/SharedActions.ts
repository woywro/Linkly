import { requestFinished, requestStarted } from "./RequestsLoadingActions";
import axios from "axios";
import { SharedWithYouInterface } from "../../types/SharedWithYouInterface";

export const getSharedWithYou = () => {
  return function (dispatch) {
    dispatch(requestStarted("getSharedWithYou"));
    axios.get("/api/getSharedWithYou").then((res) => {
      const shares: SharedWithYouInterface[] = [];
      res.data.result.map((share: SharedWithYouInterface) => {
        shares.push(share);
      });
      dispatch(setSharedWithYou(shares));
      dispatch(requestFinished("getSharedWithYou"));
    });
  };
};

export const setSharedWithYou = (shares: SharedWithYouInterface[]) => ({
  type: "SET_SHAREDWITHYOU",
  payload: {
    shares,
  },
});

export const updateSharedWithYou = (share: SharedWithYouInterface) => ({
  type: "UPDATE_SHAREDWITHYOU",
  payload: {
    share,
  },
});
