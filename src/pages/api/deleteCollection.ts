import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const result = await prisma.Collection.delete({
      where: {
        id: data.id,
      },
    });
    res.json({ result });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
