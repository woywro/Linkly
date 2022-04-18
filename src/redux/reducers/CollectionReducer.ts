import { CollectionInterface } from "../../types/CollectionInterface";
import { AnyAction } from "redux";

const initialCollections: CollectionInterface[] = [];

export const collections = (state = initialCollections, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS": {
      const allCollections: CollectionInterface[] = [
        ...state,
        ...action.payload.collections,
      ];
      const removedDuplicates: CollectionInterface[] = allCollections.reduce(
        (acc: CollectionInterface[], current: CollectionInterface) => {
          const x = acc.find(
            (item: CollectionInterface) => item.id === current.id
          );
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      );
      const sorted: CollectionInterface[] = removedDuplicates.sort((a, b) => {
        return (
          parseInt(b.modificationTimestamp) - parseInt(a.modificationTimestamp)
        );
      });
      return sorted;
    }
    case "UPDATE_SHARESTATUS": {
      const collectionsFiltered: CollectionInterface[] = state.filter(
        (e) => e.id !== action.payload.collectionId
      );
      let collectionModified: CollectionInterface = state.filter(
        (e) => e.id == action.payload.collectionId
      )[0];

      collectionModified.shareRequests = action.payload.shareRequests;
      const updatedCollections: CollectionInterface[] = [
        collectionModified,
        ...collectionsFiltered,
      ];
      return updatedCollections;
    }
    case "UPDATE_COLLECTION": {
      const newState: CollectionInterface[] = [...state];
      const collectionsFiltered: CollectionInterface[] = newState.filter(
        (e) => e.id !== action.payload.collection.id
      );
      const updatedCollections: CollectionInterface[] = [
        action.payload.collection,
        ...collectionsFiltered,
      ];
      return updatedCollections;
    }
    case "SET_COLLECTIONS": {
      return action.payload.collections;
    }
    default: {
      return state;
    }
  }
};
