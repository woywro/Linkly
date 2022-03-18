import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const data = req.body;
  const session = await getSession({ req });
  console.log(data.email);
  try {
    const result = await prisma.Friend.create({
      data: {
        email: data.email,
        owner: { connect: { email: session.user.email } },
        isAccepted: false,
        timestamp: Date.now().toString(),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while updating collections." });
  }
};
