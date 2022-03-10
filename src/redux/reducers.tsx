import { combineReducers } from "redux";
import { HistoryInterface } from "../types/HistoryInterface";
import { AnyAction } from "redux";
import { TagInterface } from "../types/TagInterface";
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

const initialTags: TagInterface[] = [];

export const Tags = (state = initialTags, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_TAGS": {
      return [...state, action.payload.tag];
    }
    case "SET_TAGS": {
      return action.payload.tags;
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
  tags: Tags,
  LoadingReducer: LoadingReducer,
});
export default allReducers;
