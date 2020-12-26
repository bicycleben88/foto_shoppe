import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });
  // const {
  //   query: { id },
  // } = req;

  // res.json({ id: id });
  try {
    const { name, description, image, albumId } = req.body;
    const albumWithPictue = await prisma.album.update({
      where: {
        id: albumId,
      },
      data: {
        pictures: {
          create: {
            name: name,
            description: description,
            image: image,
          },
        },
      },
    });
    res.statusCode = 201;
    res.json({ albumWithPictue });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: error, picture: req.body });
  } finally {
    prisma.$disconnect();
  }
};
