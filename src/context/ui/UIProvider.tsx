import { PropsWithChildren, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer as reducer } from "./uiReducer";
import { TOGGLE_DRAGGING, TOGGLE_SIDEMENU } from "./types";

export interface UIState {
  sidemenuOpen: boolean;
  isDragging: boolean;
}

const initialState: UIState = {
  sidemenuOpen: false,
  isDragging: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidemenu = (sidemenuOpen: boolean) => {
    dispatch({
      type: TOGGLE_SIDEMENU,
      payload: sidemenuOpen,
    });
  };

  const toggleDragging = (toggleDragging: boolean) => {
    dispatch({
      type: TOGGLE_DRAGGING,
      payload: toggleDragging,
    });
  };

  return (
    <UIContext.Provider value={{ ...state, toggleSidemenu, toggleDragging }}>
      {children}
    </UIContext.Provider>
  );
};
