import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
let url = require("url");
let logInAttempts = 0;

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
      profile: (profile) => {
        return {
          id: profile.id.toString(),
          name: profile?.name,
          email: profile?.email,
          image: profile?.image,
        };
      },
    }),
  ],
  debug: false,
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  adapter: PrismaAdapter(prisma),
  database: process.env.DATABASE_URL,
};

const logIn = async (req, res) => {
  let parsedUrl = await url.parse(req.url);
  while (parsedUrl.path.includes("error") && logInAttempts <= 3) {
    logInAttempts++;
    logIn(req, res);
  }
  return await NextAuth(req, res, options);
};

export default logIn;
