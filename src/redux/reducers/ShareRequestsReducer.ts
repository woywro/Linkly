import { ShareRequestInterface } from "../../types/ShareRequestInterface";
import { AnyAction } from "redux";

const initialShareRequests: ShareRequestInterface[] = [];

export const shareRequests = (
  state = initialShareRequests,
  action: AnyAction
) => {
  switch (action.type) {
    case "SET_SHAREREQUESTS": {
      return action.payload.shareRequests;
    }
    case "DELETE_SHAREREQUEST": {
      const shareRequests: ShareRequestInterface[] = state.filter(
        (e) => e.id !== action.payload.id
      );
      return shareRequests;
    }
    default: {
      return state;
    }
  }
};
