import { combineReducers } from "redux";
import { HistoryInterface } from "../types/HistoryInterface";
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

export const Links = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LINK": {
      return [
        ...state,
        {
          id: action.payload.link.id,
          name: action.payload.link.name,
          url: action.payload.link.url,
          tags: action.payload.link.tags,
        },
      ];
    }

    default: {
      return state;
    }
  }
};

export const History = (state = initialHistory, action) => {
  switch (action.type) {
    case "UPDATE_HISTORY": {
      const newObj = { id: action.payload.link.id, timestamp: Date.now() };
      const newHistory = [newObj, ...state];
      return newHistory;
    }
    default: {
      return state;
    }
  }
};

const initialTags = ["facebook", "social", "instagram", "video"];

export const Tags = (state = initialTags, action) => {
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
