import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const request = await prisma.User.findMany({
    where: {
      email: session.user.email,
    },
    select: {
      followedBy: {
        include: {
          follower: true,
        },
      },
    },
  });
  res.statusCode = 200;
  res.json({ request });
};
