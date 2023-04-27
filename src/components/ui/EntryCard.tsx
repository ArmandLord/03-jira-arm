import { Entry } from "@/interfaces";
import React, { FC } from "react";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description, createdAt, status } = entry;
  return (
    <div className="bg-background-three p-4 mb-1 shadow rounded">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-2">{description}</h3>
        <p className="text-gray-600">{status}</p>
      </div>
      <p className="text-gray-600">{createdAt}</p>
    </div>
  );
};
