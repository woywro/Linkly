import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const result = await prisma.User.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        shareRequestsReceived: {
          select: {
            id: true,
            owner: true,
            receiver: true,
            collection: true,
            isAccepted: true,
          },
        },
      },
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(403).json({ err });
  }
};
