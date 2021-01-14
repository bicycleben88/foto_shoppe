import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    const prisma = new PrismaClient({ log: ["query"] });

    try {
      const { name, description } = req.body;
      const album = await prisma.album.create({
        data: {
          name: name,
          description: description,
        },
      });
      res.statusCode = 201;
      res.json({ album });
    } catch (error) {
      res.statusCode = 500;
      res.json({ error: "Couldn't Create Album" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.statusCode = 401;
    res.json({ error: "You're not Logged In" });
  }
};
