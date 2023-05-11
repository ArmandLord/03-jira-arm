import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import { Entry } from "@/models";
import { IEntry } from "@/models/Entry";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "The id is not valid" });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntry(req, res);

    default:
      return res.status(400).json({ message: "Method does not exist" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connectDB();
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnectDB();
    return res
      .status(400)
      .json({ message: "No entry with this id:" + " " + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnectDB();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnectDB();
    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await db.connectDB();

  const getEntry = await Entry.findById(id);

  if (!getEntry) {
    await db.disconnectDB();
    return res
      .status(400)
      .json({ message: "No entry with this id:" + " " + id });
  }

  await db.disconnectDB();
  res.status(200).json(getEntry);
};
