import { HistoryInterface } from "../../types/HistoryInterface";
import { AnyAction } from "redux";
import { themeDefault } from "../../theme/theme";

const initial = themeDefault;

export const Theme = (state = initial, action: AnyAction) => {
  switch (action.type) {
    case "SWITCH_THEME": {
      return action.payload.theme;
    }
    default: {
      return state;
    }
  }
};
