import { LinkInterface } from "../../types/LinkInterface";
import axios from "axios";
import {
  requestStarted,
  requestFinished,
} from "../actions/RequestsLoadingActions";

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

export const setLinks = (links: LinkInterface[]) => ({
  type: "SET_LINKS",
  payload: {
    links,
  },
});

export const updateLink = (link: LinkInterface) => ({
  type: "UPDATE_LINK",
  payload: {
    link,
  },
});

export const getLinks = () => {
  return function (dispatch) {
    dispatch(requestStarted("getLinks"));
    axios.get("/api/getLinks", { params: { cursor: "" } }).then((res) => {
      dispatch(setLinks(res.data.link));
      dispatch(requestFinished("getLinks"));
    });
  };
};

export const sortLinks = (sorting) => {
  return function (dispatch) {
    switch (sorting) {
      case "asc":
        return axios.get("/api/sortByNameASC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
      case "desc":
        return axios.get("/api/sortByNameDESC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
      case "ownerAsc":
        return axios.get("/api/sortByOwnerASC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
      case "ownerDesc":
        return axios.get("/api/sortByOwnerDESC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
      case "modifiedAsc":
        return axios.get("/api/sortByModificationASC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
      case "modifiedDesc":
        return axios.get("/api/sortByModificationDESC").then((res) => {
          dispatch(setLinks(res.data.link));
        });
    }
  };
};
