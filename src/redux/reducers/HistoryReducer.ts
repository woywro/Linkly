import { HistoryInterface } from "../../types/HistoryInterface";
import { AnyAction } from "redux";

const initialHistoryState: HistoryInterface[] = [];

export const History = (state = initialHistoryState, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const newObj = { link: action.payload.link, timestamp: Date.now() };
      const newHistory = [newObj, ...state];
      return newHistory;
    }
    case "SET_HISTORY": {
      return action.payload.links;
    }
    default: {
      return state;
    }
  }
};
