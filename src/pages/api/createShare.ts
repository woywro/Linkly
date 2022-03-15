import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  const data = req.body;
  const session = await getSession({ req });
  console.log(data);
  try {
    const result = await prisma.Share.upsert({
      where: {
        categoryId: data.categoryId,
      },
      update: {
        sharedWith: data.sharedWith,
        owner: { connect: { email: session.user.email } },
        category: { connect: { id: data.categoryId } },
      },
      create: {
        sharedWith: data.sharedWith,
        owner: { connect: { email: session.user.email } },
        category: { connect: { id: data.categoryId } },
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while adding new link." });
  }
};
