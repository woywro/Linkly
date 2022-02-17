import { combineReducers } from "redux";
const initialState = [
  {
    name: "facebook profile",
    url: "facebook.com",
    tags: ["facebook", "profile", "social"],
    color: "#ffd230",
  },
  {
    name: "instagram profile",
    url: "instagram.com",
    tags: ["instagram", "profile", "social"],
    color: "#ffd230",
  },
  {
    name: "youtube",
    url: "youtube.com",
    tags: ["video", "youtube"],
    color: "#ffd230",
  },
];

export const Links = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LINK": {
      return [
        ...state,
        {
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

const allReducers = combineReducers({
  links: Links,
});
export default allReducers;
