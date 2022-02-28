import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await getSession({ req });
  const tags = await prisma.Tag.findMany({
    where: {
      owner: { email: session.user.email },
    },
  });
  res.statusCode = 200;
  res.json({ tags });
};
