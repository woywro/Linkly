import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const link = await prisma.Link.findMany({
      orderBy: {
        owner: { email: "desc" },
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
    res.status(200).json({ link });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
