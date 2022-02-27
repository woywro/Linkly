import { LinkInterface } from "../types/LinkInterface";
import axios from "axios";
import { HistoryInterface } from "../types/HistoryInterface";

export const addLink = (link: LinkInterface) => ({
  type: "ADD_LINK",
  payload: {
    link,
  },
});
export const deleteLink = (link: LinkInterface) => ({
  type: "DELETE_LINK",
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

export const setHistory = (links: HistoryInterface[]) => ({
  type: "SET_HISTORY",
  payload: {
    links,
  },
});

export const getHistory = () => {
  return function (dispatch) {
    axios.get("/api/getHistory").then((res) => {
      dispatch(setHistory(res.data.history));
    });
  };
};
