import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const data = req.query["search"];
  const link = await prisma.Link.findMany({
    where: {
      title: {
        contains: data,
      },
      owner: { email: session.user.email },
    },
    select: {
      id: true,
      title: true,
      url: true,
      tags: true,
      ownerId: true,
      owner: true,
      modificationTimestamp: true,
    },
  });
  res.statusCode = 200;
  res.json({ link });
};
