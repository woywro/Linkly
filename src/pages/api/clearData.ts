import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });

  try {
    const [links, collections] = await prisma.$transaction([
      prisma.Link.deleteMany({
        where: {
          owner: { email: session?.user?.email },
        },
      }),
      prisma.Collection.deleteMany({
        where: {
          owner: { email: session?.user?.email },
        },
      }),
    ]);
    res.json({ links, collections });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
