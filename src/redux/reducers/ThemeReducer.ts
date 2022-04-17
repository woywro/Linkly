import { AnyAction } from "redux";
import { themeFirst } from "../../theme/theme";

const initial = themeFirst;

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
