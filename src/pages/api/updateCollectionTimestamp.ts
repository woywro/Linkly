import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });

  try {
    const result = await prisma.Collection.update({
      where: { id: data.id },
      data: {
        modificationTimestamp: Date.now().toString(),
      },
      select: {
            id: true,
            value: true,
            links: true,
            modificationTimestamp: true,
            shareRequests: true,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err });
  }
};
