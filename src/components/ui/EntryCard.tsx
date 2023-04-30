import { FC, DragEvent } from "react";
import { Entry } from "@/interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description, createdAt, status } = entry;

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    // hacer efectos
    event.dataTransfer.setData("text/plain", entry._id);
  };

  const onDragEnd = () => {
    console.log("drag end");
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      id={entry._id}
      className="bg-background-three p-4 mb-1 shadow rounded"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-2">{description}</h3>
        <p className="text-gray-600">{status}</p>
      </div>
      <p className="text-gray-600">{createdAt}</p>
    </div>
  );
};
