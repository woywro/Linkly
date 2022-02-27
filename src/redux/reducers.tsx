import { combineReducers } from "redux";
import { HistoryInterface } from "../types/HistoryInterface";
import { AnyAction } from "redux";
const initialState = [
  {
    name: "facebook profile",
    id: 123402,
    url: "https://www.facebook.com/",
    tags: ["facebook", "profile", "social"],
    color: "#ffd230",
  },
  {
    name: "instagram profile",
    id: 103978,
    url: "instagram.com",
    tags: ["instagram", "profile", "social"],
    color: "#ffd230",
  },
  {
    name: "youtube",
    id: 330299,
    url: "youtube.com",
    tags: ["video", "youtube"],
    color: "#ffd230",
  },
  {
    name: "portal studenta",
    id: 386399,
    url: "xyz.pl",
    tags: ["education", "school"],
    color: "#ffd230",
  },
];

const initialHistory: HistoryInterface[] = [];

export const Links = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_LINK": {
      return [
        ...state,
        {
          id: action.payload.link.id,
          title: action.payload.link.name,
          url: action.payload.link.url,
          categories: action.payload.link.categories,
          keywords: action.payload.link.categories,
          ownerId: action.payload.link.ownerId,
        },
      ];
    }
    case "SET_LINKS": {
      return action.payload.links;
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

const initialTags = [
  { name: "facebook", type: "tag" },
  { name: "social", type: "category" },
  { name: "video", type: "category" },
];

export const Tags = (state = initialTags, action: AnyAction) => {
  switch (action.type) {
    case "UPDATE_TAGS": {
      return [...state, action.payload.tag];
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
});
export default allReducers;
