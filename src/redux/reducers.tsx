import { AnyAction, combineReducers } from "redux";
import { CollectionInterface } from "../types/CollectionInterface";
import { HistoryInterface } from "../types/HistoryInterface";
const initialState = [];

const initialHistory: HistoryInterface[] = [];

export const Links = (state = initialState, action: AnyAction) => {
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

export const History = (state = initialHistory, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const newObj = { linkId: action.payload.link.id, timestamp: Date.now() };
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

export const LoadingReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOAD_LOADING": {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case "LOAD_SUCCESS": {
      return {
        ...state,
        loading: false,
      };
    }
    case "LOAD_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error,
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
  LoadingReducer: LoadingReducer,
  sharedWithYou: sharedWithYou,
});
export default allReducers;
