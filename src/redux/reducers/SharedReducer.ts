import { CollectionInterface } from "../../types/CollectionInterface";
import { AnyAction } from "redux";

const initialCollections: CollectionInterface[] = [];

export const sharedWithYou = (
  state = initialCollections,
  action: AnyAction
) => {
  switch (action.type) {
    case "SET_SHAREDWITHYOU": {
      return action.payload.shares;
    }
    case "UPDATE_SHAREDWITHYOU": {
      return [...state, action.payload.share];
    }
    default: {
      return state;
    }
  }
};
