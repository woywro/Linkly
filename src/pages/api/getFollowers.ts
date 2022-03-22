import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const request = await prisma.User.findMany({
      where: {
        email: session.user.email,
      },
      select: {
        friendUserFriends: {
          select: {
            user: true,
          },
        },
      },
    });
    res.status(200).json({ request });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
