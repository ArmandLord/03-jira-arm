interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Tarea 1",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description: "Tarea 2",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      description: "Tarea 3",
      createdAt: Date.now() - 2000000,
      status: "finished",
    },
  ],
};
