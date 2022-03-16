import { prisma } from "../../../prisma/PrismaClient";

export default async (req, res) => {
  let searchValue = req.query.search;
  const links = await prisma.Link.findMany({
    where: {
      title: {
        search: `${searchValue.split(" ").join(" & ")}`,
      },
      url: {
        search: `${searchValue}`,
      },
    },
  });
  res.statusCode = 200;
  res.json({ links });
};
