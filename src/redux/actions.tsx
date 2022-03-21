import { LinkInterface } from "../types/LinkInterface";
import axios from "axios";
import { HistoryInterface } from "../types/HistoryInterface";
import { CollectionInterface } from "../types/CollectionInterface";

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
export const updateCollections = (collection: CollectionInterface) => ({
  type: "UPDATE_CollectionS",
  payload: {
    collection,
  },
});

export const setLinks = (links) => ({
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
    dispatch({ type: "LOAD_LOADING" });
    axios.get("/api/getLinks").then((res) => {
      dispatch(setLinks(res.data.link));
      dispatch({ type: "LOAD_SUCCESS" });
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

export const setHistory = (links: HistoryInterface[]) => ({
  type: "SET_HISTORY",
  payload: {
    links,
  },
});

export const getHistory = () => {
  return function (dispatch) {
    dispatch({ type: "LOAD_LOADING" });
    axios.get("/api/getHistory").then((res) => {
      dispatch(setHistory(res.data.history));
      dispatch({ type: "LOAD_SUCCESS" });
    });
  };
};

export const setCollections = (collections) => ({
  type: "SET_COLLECTIONS",
  payload: {
    collections,
  },
});

export const getCollections = () => {
  return function (dispatch) {
    axios.get("/api/getCollections").then((res) => {
      dispatch(setCollections(res.data.collections));
    });
  };
};

export const createShare = (categoryId, sharedWith) => {
  return function (dispatch) {
    axios.post("/api/createShare", {
      categoryId: categoryId,
      sharedWith: sharedWith,
    });
  };
};

export const deleteCollection = (collections, collectionId) => {
  return function (dispatch) {
    axios.post("/api/deleteCollection", { id: collectionId }).then((res) => {
      dispatch(setCollections(collections.filter((e)=> e !== res.data.result)));
      // console.log([res.data.result]);
    });
  };
};
