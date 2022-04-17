import { HistoryInterface } from "../../types/HistoryInterface";
import { AnyAction } from "redux";

const initialHistoryState: HistoryInterface[] = [];

export const History = (state = initialHistoryState, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const newObj: HistoryInterface = {
        link: action.payload.link,
        timestamp: Date.now().toString(),
      };
      const newHistory: HistoryInterface[] = [newObj, ...state];
      return newHistory;
    }
    case "SET_HISTORY": {
      return action.payload.historyLinks;
    }
    default: {
      return state;
    }
  }
};
