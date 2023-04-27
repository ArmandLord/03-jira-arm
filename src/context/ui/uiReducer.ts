import { TOGGLE_SIDEMENU } from "./types";

export const uiReducer = (
  state: any,
  { type, payload }: { type: string; payload: any }
) => {
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
