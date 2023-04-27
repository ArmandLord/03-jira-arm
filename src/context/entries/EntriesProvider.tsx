import { PropsWithChildren, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer as reducer } from "./entriesReducer";
import { Entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Prueba y Error padrino",
      createdAt: 1630500000000,
      status: "pending",
    },
  ],
};

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispach] = useReducer(reducer, initialState);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
