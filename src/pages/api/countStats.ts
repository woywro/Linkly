import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const [links, collections, shareRequests] = await prisma.$transaction([
      prisma.Link.count({
        where: {
          owner: { email: session?.user?.email },
        },
      }),
      prisma.Collection.count({
        where: {
          owner: { email: session?.user?.email },
        },
      }),
      prisma.ShareRequest.count({
        where: {
          owner: { email: session?.user?.email },
        },
      }),
    ]);
    res.status(200).json({ links, collections, shareRequests });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
