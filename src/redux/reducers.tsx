import { AnyAction, combineReducers } from "redux";
import { CollectionInterface } from "../types/CollectionInterface";
import { HistoryInterface } from "../types/HistoryInterface";
import { LinkInterface } from "../types/LinkInterface";

const initialLinksState: LinkInterface[] = [];

export const Links = (state = initialLinksState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_LINK": {
      const linksSorted = [...state, action.payload.link].sort(
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
      const filtered = [...state].filter(
        (e) => e.id !== action.payload.link.id
      );
      const sorted = [...filtered, action.payload.link].sort(
        (a, b) => b.modificationTimestamp - a.modificationTimestamp
      );
      return sorted;
    }

    default: {
      return state;
    }
  }
};

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

const initial = {
  data: [],
  loading: false,
  error: "",
};

const initialState = {
  requests: [],
};

export const requestsLoading = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED": {
      const existingCall = state.requests.find(
        (request) => request.requestName === action.request.name
      );

      if (existingCall) {
        return {
          ...state,
          requests: state.requests.map((request) =>
            request.name === action.request.name
              ? { ...request, inProgress: true, error: null }
              : request
          ),
        };
      }

      return {
        ...state,
        requests: [...state.requests, action.request],
      };
    }
    case "REQUEST_FINISHED": {
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.name !== action.request.name
        ),
      };
    }
    case "REQUEST_FAILED": {
      return {
        ...state,
        requests: state.requests.map((request) =>
          request.name === action.request.name
            ? {
                ...request,
                error: action.request.error,
                inProgress: false,
              }
            : request
        ),
      };
    }
    default: {
      return state;
    }
  }
};

const allReducers = combineReducers({
  links: Links,
  history: History,
  collections: collections,
  sharedWithYou: sharedWithYou,
  requestsLoading: requestsLoading,
});
export default allReducers;
