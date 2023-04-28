import { Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type ActionType = { type: "ADD_ENTRY"; payload: Entry };

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
    default:
      return state;
  }
};
