import { PropsWithChildren, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer as reducer } from "./uiReducer";
import { TOGGLE_SIDEMENU } from "./types";

interface State {
  sidemenuOpen: boolean;
}

const initialState: State = {
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

  const value = {
    sidemenuOpen: state.sidemenuOpen,
    toggleSidemenu,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
