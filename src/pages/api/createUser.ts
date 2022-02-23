import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: "ddd",
    },
  });
  res.statusCode = 200;
  res.json({ user });
};
