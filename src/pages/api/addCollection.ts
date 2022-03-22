import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.collection.create({
      data: {
        ...data,
        owner: { connect: { email: session.user.email } },
      },
    });
    res.status(200).json(result);
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
