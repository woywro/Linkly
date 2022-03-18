import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const id = req.query["id"];
  const link = await prisma.Link.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      url: true,
      collections: true,
      ownerId: true,
      owner: true,
      modificationTimestamp: true,
    },
  });
  res.statusCode = 200;
  res.json({ link });
};
