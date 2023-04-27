import { PropsWithChildren, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer as reducer } from "./entriesReducer";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispach] = useReducer(reducer, initialState);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
