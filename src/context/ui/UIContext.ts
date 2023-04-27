import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;
  toggleSidemenu: (sidemenuOpen: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
