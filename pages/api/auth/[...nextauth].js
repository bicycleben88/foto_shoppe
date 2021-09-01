import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
let url = require("url");
let logInAttempts = 0;

const { GIT_ID, GIT_SECRET, FB_ID, FB_SECRET } = process.env;

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.GitHub({
      clientId: GIT_ID,
      clientSecret: GIT_SECRET,
      profile: (profile) => {
        return {
          id: profile.id.toString(),
          name: profile?.name,
          email: profile?.email,
          image: profile?.image,
        };
      },
    }),
    Providers.Facebook({
      clientId: FB_ID,
      clientSecret: FB_SECRET,
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
  return await NextAuth(req, res, options);
};

export default logIn;
