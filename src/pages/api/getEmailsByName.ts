import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const data = req.query["search"];
  try {
    const emails = await prisma.User.findMany({
      where: {
        email: {
          contains: data,
        },
      },
    });
    res.status(200).json({ emails });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
