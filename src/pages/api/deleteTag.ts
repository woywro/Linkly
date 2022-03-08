import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { useDebugValue } from "react";
const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.Tag.delete({
      where: {
        id: data.id,
      },
      select: {
        value: true,
        type: true,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while adding new link." });
  }
};
