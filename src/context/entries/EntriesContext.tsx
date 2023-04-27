import { createContext } from "react";

export interface ContextProps {
  prop1: boolean;
}

export const EntriesContext = createContext({} as ContextProps);
