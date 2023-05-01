import { PropsWithChildren, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer as reducer } from "./entriesReducer";
import { EntrieStatus, Entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispach] = useReducer(reducer, initialState);

  const addEntry = (entry: Entry) => {
    dispach({
      type: "ADD_ENTRY",
      payload: entry,
    });
  };

  const changesStatusById = (id: string, status: EntrieStatus) => {
    dispach({
      type: "CHANGE_STATUS",
      payload: {
        id,
        status,
      },
    });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, changesStatusById }}>
      {children}
    </EntriesContext.Provider>
  );
};
