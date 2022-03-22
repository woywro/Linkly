import { PrismaClient } from "@prisma/client";
import { triggerAsyncId } from "async_hooks";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const result = await prisma.FriendRequest.upsert({
      where: { id: data.id },
      data: {
        isAccepted: true,
      },
    });
    res.status(200).json(result);
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
