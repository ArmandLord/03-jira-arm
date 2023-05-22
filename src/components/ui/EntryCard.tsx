import { FC, DragEvent, useContext } from "react";
import { useRouter } from "next/router";
import { Entry } from "@/interfaces";
import { UIContext } from "@/context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description, createdAt, status } = entry;
  const { isDragging, toggleDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    toggleDragging(true);
    event.dataTransfer.setData("text/plain", entry._id);
  };

  const onDragEnd = () => {
    toggleDragging(false);
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={` bg-orange-50 p-4 mb-1 shadow rounded ${
        isDragging ? "hover:cursor-grabbing" : "hover:cursor-grab"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-sm text-neutral-800 mb-4">{description}</h3>
      </div>
      <div
        className={`flex justify-end w-full ${
          status === "pending" ? "text-yellow-500" : "text-green-500"
        }`}
      >
        <p className="text-dark-ligth text-xs">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
