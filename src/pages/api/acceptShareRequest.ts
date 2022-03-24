import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const data = req.body;
  try {
    const result = await prisma.ShareRequest.update({
      where: {
        id: data.id,
      },
      data: {
        isAccepted: true,
      },
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(403).json({ err });
  }
};
