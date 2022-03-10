import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const history = await prisma.History.findMany({
    orderBy: {
      timestamp: "desc",
    },
    take: 5,
    where: {
      owner: { email: session.user.email },
    },
  });
  res.statusCode = 200;
  res.json({ history });
};
