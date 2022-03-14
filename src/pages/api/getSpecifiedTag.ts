import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const data = req.body;
  const tag = await prisma.Tag.findUnique({
    where: {
      id: req.query["id"],
    },
  });
  res.statusCode = 200;
  res.json({ tag });
};
