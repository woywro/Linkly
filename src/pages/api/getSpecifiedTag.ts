import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const data = req.body;
  const tags = await prisma.Tag.findMany({
    where: {
      owner: { email: session.user.email },
      value: data.tagValue,
    },
  });
  res.statusCode = 200;
  res.json({ tags });
};
