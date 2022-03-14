import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const data = req.data;
  const shares = await prisma.Share.findMany({
    where: {
      owner: { email: session.user.email },
      categoryId: req.query.id,
    },
    include: {
      category: {
        select: {
          links: true,
          value: true,
          owner: true,
          id: true,
        },
      },
    },
  });
  res.statusCode = 200;
  res.json({ shares });
};
