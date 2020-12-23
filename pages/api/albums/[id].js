import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });
  // get [id] from url
  const {
    query: { id },
  } = req;

  // make API request w/[id] from url
  try {
    const album = await prisma.album.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        pictures: true,
      },
    });
    res.statusCode = 200;
    res.json({ album });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Couldn't Get Album " });
  } finally {
    prisma.$disconnect();
  }
};
