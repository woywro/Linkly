import { combineReducers } from "redux";
import { Links } from "./reducers/LinkReducer";
import { History } from "./reducers/HistoryReducer";
import { collections } from "./reducers/CollectionReducer";
import { sharedWithYou } from "./reducers/SharedReducer";
import { requestsLoading } from "./reducers/RequestsLoadingReducer";
import { Theme } from "./reducers/ThemeReducer";

const allReducers = combineReducers({
  links: Links,
  history: History,
  collections: collections,
  sharedWithYou: sharedWithYou,
  requestsLoading: requestsLoading,
  theme: Theme,
});
export default allReducers;
