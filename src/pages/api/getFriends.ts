import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  let searchValue = req.query.search;
  try {
    const result = await prisma.ShareRequest.findMany({
      where: {
        ownerId: session?.user.id,
        isAccepted: true,
        receiverEmail: {
          contains: searchValue,
          mode: "insensitive",
        },
      },
      select: {
        receiverEmail: true,
      },
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(403).json({ err });
  }
};
