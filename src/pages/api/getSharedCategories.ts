import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await getSession({ req });
  const shares = await prisma.Share.findMany({
    // where: {
    //   sharedWith: { has: session.user.email },
    // },
    select: {
      category: true
    },
  });
  res.statusCode = 200;
  res.json({ shares });
};
