import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: req.query["id"],
      },
    });
    res.status(200).json({ collection });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
