import { CollectionInterface } from "../../types/CollectionInterface";
import { AnyAction } from "redux";

const initialCollections: CollectionInterface[] = [];

export const shareRequests = (
  state = initialCollections,
  action: AnyAction
) => {
  switch (action.type) {
    case "SET_SHAREREQUESTS": {
      return action.payload.shareRequests;
    }
    case "DELETE_SHAREREQUEST": {
      const shareRequests = state.filter((e) => e.id !== action.payload.id);
      return shareRequests;
    }
    default: {
      return state;
    }
  }
};
