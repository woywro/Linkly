import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const collections = await prisma.Collection.findMany({
      where: {
        owner: { email: session.user.email },
      },
      orderBy: {
        modificationTimestamp: "desc",
      },
      select: {
        id: true,
        value: true,
        links: true,
        modificationTimestamp: true,
        shareRequests: true,
      },
    });
    res.status(200).json({ collections });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
