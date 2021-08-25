import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";
import Providers from "next-auth/providers";

const prisma = new PrismaClient();

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId:
          process.env.NODE_ENV === "development"
            ? process.env.GIT_DEVELOPMENT_ID
            : process.env.GIT_PRODUCTION_ID,
        clientSecret:
          process.env.NODE_ENV === "development"
            ? process.env.GIT_DEVELOPMENT_SECRET
            : process.env.GIT_PRODUCTON_SECRET,
      }),
    ],
    debug: process.env.NODE_ENV === "development",
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    adapter: Adapters.Prisma.Adapter({ prisma }),
  });
