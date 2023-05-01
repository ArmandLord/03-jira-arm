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
      description: "Prueba y Error padrino",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description: "Prueba y Error padrino",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      description: "Prueba y Error padrino",
      createdAt: Date.now() - 2000000,
      status: "finished",
    },
  ],
};
