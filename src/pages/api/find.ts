import { prisma } from "../../../prisma/PrismaClient";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let searchValue = req.query.search;
  const session = await getSession({ req });
  try {
    const links = await prisma.Link.findMany({
      where: {
        owner: { email: session.user.email },
        OR: [
          {
            title: {
              contains: `${searchValue}`,
            },
          },
          {
            url: {
              startsWith: `${searchValue}`,
            },
          },
        ],
      },
      select: {
        url: true,
        title: true,
      },
    });
    res.status(200).json({ links });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
