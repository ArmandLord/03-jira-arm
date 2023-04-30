import { FC, useMemo, DragEvent } from "react";
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

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text/plain");
    console.log(id);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={(event) => event.preventDefault()}
      style={{
        height: "calc(100vh - 285px)",
        overflow: "scroll",
        padding: "5px 0",
      }}
    >
      {filteredEntries.map((entry) => (
        <EntryCard key={entry._id} entry={entry} />
      ))}
    </div>
  );
};
