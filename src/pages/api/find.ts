import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  let searchValue = req.query.search;
  const links = await prisma.Link.findMany({
    where: {
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
