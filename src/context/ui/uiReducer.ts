import { UIState } from "./UIProvider";
import { TOGGLE_SIDEMENU } from "./types";

type Action = { type: "TOGGLE_SIDEMENU"; payload: any };

export const uiReducer = (
  state: UIState,
  { type, payload }: Action
): UIState => {
  switch (type) {
    case TOGGLE_SIDEMENU:
      return {
        ...state,
        sidemenuOpen: payload,
      };

    default:
      return state;
  }
};
