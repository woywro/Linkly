import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const session = await getSession({ req });
  const request = await prisma.FriendRequest.findMany({
    where: {
      email: session.user.email,
      isAccepted: false,
    },
    include: {
      owner: true,
    },
  });
  res.statusCode = 200;
  res.json({ request });
};