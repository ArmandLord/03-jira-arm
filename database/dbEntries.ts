import { isValidObjectId } from "mongoose";
import { db } from ".";
import { Entry } from "@/models";
import { IEntry } from "@/models/Entry";

export const dbEntriesById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) {
    return null;
  }

  await db.connectDB();
  const entry = await Entry.findById(id).lean();
  await db.disconnectDB();
  return JSON.parse(JSON.stringify(entry));
};
