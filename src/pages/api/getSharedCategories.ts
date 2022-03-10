import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const shares = await prisma.Share.findMany({
    where: {
      sharedWith: { has: session.user.email },
    },
    include: {
      category: {
        select: {
          links: true,
          value: true,
          owner: true,
          id: true,
        },
      },
    },
  });
  res.statusCode = 200;
  res.json({ shares });
};
