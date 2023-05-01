import { EntrieStatus, Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type ActionType =
  | { type: "ADD_ENTRY"; payload: Entry }
  | {
      type: "CHANGE_STATUS";
      payload: {
        id: string;
        status: EntrieStatus;
      };
    }
  | { type: "GET_ENTRIES"; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, payload],
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === payload.id
            ? {
                ...entry,
                status: payload.status,
              }
            : entry
        ),
      };
    case "GET_ENTRIES":
      return {
        ...state,
        entries: [...payload],
      };
    default:
      return state;
  }
};
