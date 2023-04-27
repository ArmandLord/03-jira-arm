import { FC, useMemo } from "react";
import { EntryCard } from "./EntryCard";
import { EntrieStatus, Entry } from "@/interfaces";

interface Props {
  entries: Entry[];
  status: EntrieStatus;
}
export const EntriesList: FC<Props> = ({ entries, status }) => {
  const filteredEntries = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );
  return (
    <div>
      <div
        style={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          padding: "5px 0",
        }}
      >
        {filteredEntries.map((entry) => (
          <EntryCard key={entry._id} entry={entry} />
        ))}
      </div>
    </div>
  );
};
