import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const albums = await prisma.album.findMany();
    res.statusCode = 200;
    res.json({ albums });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Couldn't Load Albums" });
  } finally {
    prisma.$disconnect();
  }
};
