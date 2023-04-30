import { UIState } from "./UIProvider";
import { TOGGLE_DRAGGING, TOGGLE_SIDEMENU } from "./types";

type Action =
  | { type: "TOGGLE_SIDEMENU"; payload: boolean }
  | { type: "TOGGLE_DRAGGING"; payload: boolean };

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

    case TOGGLE_DRAGGING:
      return {
        ...state,
        isDragging: payload,
      };

    default:
      return state;
  }
};
