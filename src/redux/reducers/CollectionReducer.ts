import { CollectionInterface } from "../../types/CollectionInterface";
import { AnyAction } from "redux";

const initialCollections: CollectionInterface[] = [];

export const collections = (state = initialCollections, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS": {
      return [...state, action.payload.collection];
    }
    case "SET_COLLECTIONS": {
      return action.payload.collections;
    }
    default: {
      return state;
    }
  }
};
