import { LinkInterface } from "../../types/LinkInterface";
import { AnyAction } from "redux";

const initialLinksState: LinkInterface[] = [];

export const Links = (state = initialLinksState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_LINK": {
      const linksSorted: LinkInterface[] = [...state, action.payload.link].sort(
        (a, b) => b.modificationTimestamp - a.modificationTimestamp
      );
      return linksSorted;
    }
    case "DELETE_LINK": {
      return [...state].filter((e) => e.id !== action.payload.link.id);
    }
    case "SET_LINKS": {
      return action.payload.links;
    }
    case "UPDATE_LINK": {
      const filtered: LinkInterface[] = [...state].filter(
        (e) => e.id !== action.payload.link.id
      );
      const sorted: LinkInterface[] = [...filtered, action.payload.link].sort(
        (a, b) => b.modificationTimestamp - a.modificationTimestamp
      );
      return sorted;
    }

    default: {
      return state;
    }
  }
};
