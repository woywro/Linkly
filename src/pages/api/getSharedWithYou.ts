import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const result = await prisma.ShareRequest.findMany({
      orderBy: {
        createdTimestamp: "desc",
      },
      where: {
        receiverEmail: session.user.email,
        isAccepted: true,
      },
      select: {
        id: true,
        createdTimestamp: true,
        collection: {
          select: {
            id: true,
            value: true,
            owner: true,
            color: true,
            links: true,
          },
        },
      },
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(403).json({ err });
  }
};
