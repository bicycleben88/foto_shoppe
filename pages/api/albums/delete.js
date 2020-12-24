import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const deletedAlbum = await prisma.album.delete({
      where: {
        id: req.body.id,
      },
    });
    res.statusCode = 200;
    res.json({ deletedAlbum });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Couldn't Delete Photo" });
  } finally {
    prisma.$disconnect();
  }
};
