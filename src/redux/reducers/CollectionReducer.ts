import { CollectionInterface } from "../../types/CollectionInterface";
import { AnyAction } from "redux";

const initialCollections: CollectionInterface[] = [];

export const collections = (state = initialCollections, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS": {
      const allCollections = [...state, ...action.payload.collections];
      const removedDuplicates = allCollections.reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      return removedDuplicates;
    }
    case "SET_COLLECTIONS": {
      return action.payload.collections;
    }
    default: {
      return state;
    }
  }
};
