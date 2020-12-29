import { PrismaClient } from "@prisma/client";

export async function queryAlbum(albumId) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const album = await prisma.album.findUnique({
      where: {
        id: parseInt(albumId),
      },
      include: {
        pictures: true,
      },
    });
    return album;
  } catch (error) {
    return { error: error };
  } finally {
    prisma.$disconnect();
  }
}

export default async function answerQuery(req, res) {
  // get [id] from url
  const {
    query: { id },
  } = req;
  const album = await queryAlbum(id);
  res.json({ album: album });
}
