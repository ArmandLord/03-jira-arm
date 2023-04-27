import { PropsWithChildren, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer as reducer } from "./uiReducer";
import { TOGGLE_SIDEMENU } from "./types";

export interface UIState {
  sidemenuOpen: boolean;
}

const initialState: UIState = {
  sidemenuOpen: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidemenu = (sidemenuOpen: boolean) => {
    dispatch({
      type: TOGGLE_SIDEMENU,
      payload: sidemenuOpen,
    });
  };

  return (
    <UIContext.Provider value={{ ...state, toggleSidemenu }}>
      {children}
    </UIContext.Provider>
  );
};
