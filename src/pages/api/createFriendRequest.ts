import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.FriendRequest.create({
      data: {
        email: data.email,
        owner: { connect: { email: session.user.email } },
        receiver: { connect: { email: data.email } },
        isAccepted: false,
        timestamp: Date.now().toString(),
      },
    });
    res.status(200).json(result);
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
