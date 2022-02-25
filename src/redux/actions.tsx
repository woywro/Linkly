import { LinkInterface } from "../types/LinkInterface";

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
