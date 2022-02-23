import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const link = await prisma.Link.findMany();
  res.statusCode = 200;
  res.json({ link });
};
