import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.Link.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while updating link." });
  }
};
