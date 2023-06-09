import { PropsWithChildren, useEffect, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer as reducer } from "./entriesReducer";
import { EntrieStatus, Entry } from "@/interfaces";
import { entriesApi } from "../../../apis";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispach] = useReducer(reducer, initialState);

  const addEntry = async (entry: Entry) => {
    const { description } = entry;

    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
    });

    dispach({
      type: "ADD_ENTRY",
      payload: data,
    });
  };

  const changesStatusById = async (
    id: string,
    status: EntrieStatus,
    description: string
  ) => {
    try {
      console.log(status);
      const { data } = await entriesApi.put<Entry>(`/entries/${id}`, {
        status,
        description,
      });

      dispach({
        type: "CHANGE_STATUS",
        payload: {
          id,
          status: data.status,
          description: data.description,
        },
      });
    } catch (error) {}
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi<Entry[]>("/entries");

    dispach({
      type: "GET_ENTRIES",
      payload: data,
    });
  };

  useEffect(() => {
    refreshEntries();
  }, []);
  return (
    <EntriesContext.Provider
      value={{ ...state, addEntry, changesStatusById, refreshEntries }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
