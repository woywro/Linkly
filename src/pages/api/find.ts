import { prisma } from "../../../prisma/PrismaClient";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  let searchValue = req.query.search;
  const session = await getSession({ req });
  const links = await prisma.Link.findMany({
    where: {
      owner: { email: session.user.email },
      OR: [
        {
          title: {
            contains: `${searchValue}`,
          },
        },
        {
          url: {
            startsWith: `${searchValue}`,
          },
        },
      ],
    },
    select: {
      url: true,
      title: true,
    },
  });
  res.statusCode = 200;
  res.json({ links });
};
