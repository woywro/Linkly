import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
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
    res.status(200).json({ shares });
  } catch (err) {
    res.status(403).json({ err });
  }
};
