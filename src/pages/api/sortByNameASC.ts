import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await getSession({ req });
  const link = await prisma.Link.findMany({
    orderBy: {
      title: "asc",
    },
    where: {
      owner: { email: session.user.email },
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
