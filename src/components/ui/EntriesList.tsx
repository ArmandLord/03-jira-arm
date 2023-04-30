import { FC, useMemo, DragEvent, useContext } from "react";
import { EntryCard } from "./EntryCard";
import { EntrieStatus, Entry } from "@/interfaces";
import { UIContext } from "@/context/ui";
import { IoAddCircleOutline } from "react-icons/io5";
interface Props {
  entries: Entry[];
  status: EntrieStatus;
}
export const EntriesList: FC<Props> = ({ entries, status }) => {
  const { isDragging } = useContext(UIContext);

  const filteredEntries = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text/plain");
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={(event) => event.preventDefault()}
      style={{
        height: "calc(100vh - 285px)",
        overflow: "scroll",
        padding: "5px 0",
        background: isDragging ? "rgba(255,255,255,0.2)" : "transparent",
        borderRadius: isDragging ? "10px" : "0",
        border: isDragging ? "1px dashed #ccc" : "none",
      }}
    >
      {filteredEntries.map((entry) => (
        <EntryCard key={entry._id} entry={entry} />
      ))}

      {isDragging && (
        <div className="flex h-full justify-center items-center">
          <IoAddCircleOutline className="text-4xl text-gray-400" />
        </div>
      )}
    </div>
  );
};
