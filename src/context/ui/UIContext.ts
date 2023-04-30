import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;
  isDragging: boolean;
  toggleSidemenu: (sidemenuOpen: boolean) => void;
  toggleDragging: (toggleDragging: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
