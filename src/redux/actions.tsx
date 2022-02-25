import { LinkInterface } from "../types/LinkInterface";
import axios from "axios";

export const addLink = (link: LinkInterface) => ({
  type: "ADD_LINK",
  payload: {
    link,
  },
});

export const updateHistory = (link: LinkInterface) => ({
  type: "UPDATE_HISTORY",
  payload: {
    link,
  },
});
export const updateTags = (tag: { name: string; type: string }) => ({
  type: "UPDATE_TAGS",
  payload: {
    tag,
  },
});

export const setLinks = (links: LinkInterface[]) => ({
  type: "SET_LINKS",
  payload: {
    links,
  },
});

export const getLinks = () => {
  return function (dispatch) {
    axios.get("/api/getLinks").then((res) => {
      dispatch(setLinks(res.data.link));
    });
  };
};
