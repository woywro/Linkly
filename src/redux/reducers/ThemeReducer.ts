import { AnyAction } from "redux";
import { theme1 } from "../../theme/theme";

const initial = theme1;

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
