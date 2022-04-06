import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/PrismaClient";
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  console.log(data);
  try {
    const result = await prisma.Collection.update({
      where: {
        id: data.collectionId,
      },
      data: {
        links: { disconnect: { id: data.id } },
      },
    });
    res.status(200).json(result);
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
