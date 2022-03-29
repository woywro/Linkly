import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { LinkInterface } from "../types/LinkInterface";
import { HistoryInterface } from "../types/HistoryInterface";
import { CollectionInterface } from "../types/CollectionInterface";
import { SharedWithYouInterface } from "../types/SharedWithYouInterface";

export default createStore(allReducers, applyMiddleware(thunk));

export interface RootState {
  links: LinkInterface[];
  history: HistoryInterface[];
  collections: CollectionInterface[];
  sharedWithYou: SharedWithYouInterface[];
  requestsLoading: any;
}
