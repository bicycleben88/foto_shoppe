import { PrismaClient } from "@prisma/client";

export async function queryAlbums() {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const albums = await prisma.album.findMany();
    return albums;
  } catch (error) {
    return { error: error };
  } finally {
    prisma.$disconnect();
  }
}

export default async function Albums(req, res) {
  const albums = await queryAlbums();
  res.json({ albums: albums });
}
