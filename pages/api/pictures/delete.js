import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const deletedPicture = await prisma.picture.delete({
      where: {
        id: req.body.id,
      },
    });
    res.statusCode = 200;
    res.json({ deletedPicture });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Couldn't Delete Photo" });
  } finally {
    prisma.$disconnect();
  }
};
