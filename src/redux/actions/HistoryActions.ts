import axios from "axios";
import { HistoryInterface } from "../../types/HistoryInterface";
import { LinkInterface } from "../../types/LinkInterface";
import {
  requestStarted,
  requestFinished,
} from "../actions/RequestsLoadingActions";
export const setHistory = (links: HistoryInterface[]) => ({
  type: "SET_HISTORY",
  payload: {
    links,
  },
});

export const updateHistory = (link: LinkInterface) => ({
  type: "UPDATE_HISTORY",
  payload: {
    link,
  },
});

export const getHistory = () => {
  return function (dispatch) {
    dispatch(requestStarted("getHistory"));
    axios.get("/api/getHistory", { params: { cursor: "" } }).then((res) => {
      dispatch(setHistory(res.data.history));
      dispatch(requestFinished("getHistory"));
    });
  };
};
