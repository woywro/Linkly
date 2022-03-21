import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const data = req.query["search"];
  const emails = await prisma.User.findMany({
    where: {
      email: {
        contains: data,
      },
    },
  });
  res.statusCode = 200;
  res.json({ emails });
};
