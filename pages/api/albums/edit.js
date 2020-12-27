import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });
  const { id, name, description } = req.body;
  try {
    const editedAlbum = await prisma.album.update({
      where: { id: id },
      data: {
        name: name,
        description: description,
      },
    });
    res.statusCode = 200;
    res.json({ editedAlbum });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Couldn't Edit Album" });
  } finally {
    prisma.$disconnect();
  }
};
