import { FC, DragEvent, useContext } from "react";
import { Entry } from "@/interfaces";
import { UIContext } from "@/context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description, createdAt, status } = entry;
  const { isDragging, toggleDragging } = useContext(UIContext);

  console.log(isDragging);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    toggleDragging(true);
    event.dataTransfer.setData("text/plain", entry._id);
  };

  const onDragEnd = () => {
    toggleDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`bg-background-three p-4 mb-1 shadow rounded ${
        isDragging ? "hover:cursor-grabbing" : "hover:cursor-grab"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-2">{description}</h3>
        <p className="text-gray-600">{status}</p>
      </div>
      <p className="text-gray-600">{createdAt}</p>
    </div>
  );
};
