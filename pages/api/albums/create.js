import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const { name, description } = req.body;
    const album = await prisma.album.create({
      data: {
        name: name,
        description: description,
      },
    });
    res.statusCode = 200;
    res.json({ album });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: error });
  } finally {
    await prisma.$disconnect();
  }
};
