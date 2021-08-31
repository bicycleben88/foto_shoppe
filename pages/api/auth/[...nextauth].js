import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

let clientId =
  process.env.NODE_ENV === "development"
    ? process.env.GIT_DEVELOPMENT_ID
    : process.env.GIT_PRODUCTION_ID;
let clientSecret =
  process.env.NODE_ENV === "development"
    ? process.env.GIT_DEVELOPMENT_SECRET
    : process.env.GIT_PRODUCTON_SECRET;

const options = {
  providers: [
    Providers.GitHub({
      clientId: clientId,
      clientSecret: clientSecret,
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

export default async (req, res) => {
  await console.log(req.headers);
  return await NextAuth(req, res, options);
};
