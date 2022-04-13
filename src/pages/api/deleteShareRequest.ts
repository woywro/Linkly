import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const result = await prisma.ShareRequest.deleteMany({
      where: {
        collectionId: data.collectionId,
        receiverEmail: data.email,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err });
  }
};
