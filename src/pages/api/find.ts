import { prisma } from "../../../prisma/PrismaClient";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { Collection, Link, ShareRequest } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let searchValue = req.query.search;
  const session = await getSession({ req });
  try {
    // const links = await prisma.Link.findMany({
    //   where: {
    //     owner: { email: session.user.email },
    //     OR: [
    //       {
    //         title: {
    //           contains: `${searchValue}`,
    //         },
    //       },
    //       {
    //         url: {
    //           startsWith: `${searchValue}`,
    //         },
    //       },
    //     ],
    //   },
    //   select: {
    //     url: true,
    //     title: true,
    //   },
    // });
    // const links = await prisma.$queryRaw`
    // select c.*, l.* from "Collection" as c, "Link" as l
    // `;
    const [links, collections] = await prisma.$transaction([
      prisma.Link.findMany({ where: { title: { contains: searchValue } } }),
      prisma.Collection.findMany({
        where: { value: { contains: searchValue } },
      }),
    ]);
    console.log(links, collections);
    res.status(200).json({ links, collections });
  } catch (err) {
    // res.status(403).json({ err });
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
  }
};
