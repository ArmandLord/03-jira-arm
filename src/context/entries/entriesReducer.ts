import { EntriesState } from "./EntriesProvider";

type ActionType = { type: string; payload: any };

export const entriesReducer = (
  state: EntriesState,
  { type, payload }: ActionType
) => {
  switch (type) {
    // case value:

    //     break;

    default:
      return state;
  }
};
