import { EntrieStatus, Entry } from "@/interfaces";
import { createContext } from "react";

export interface ContextProps {
  entries: Entry[];
  addEntry: (entry: Entry) => void;
  changesStatusById: (id: string, status: EntrieStatus) => void;
  refreshEntries: () => void;
}

export const EntriesContext = createContext({} as ContextProps);
