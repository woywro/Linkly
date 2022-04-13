import { prisma } from "../../../prisma/PrismaClient";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { Collection, Link, ShareRequest } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let searchValue = req.query.search;
  const session = await getSession({ req });
  try {
    const [links, collections] = await prisma.$transaction([
      prisma.Link.findMany({
        where: {
          title: { contains: searchValue, mode: "insensitive" },
          owner: { email: session.user.email },
        },
      }),
      prisma.Collection.findMany({
        where: {
          value: {
            contains: searchValue,
            mode: "insensitive",
          },
          owner: { email: session.user.email },
        },
      }),
    ]);
    res.status(200).json({ links, collections });
  } catch (err) {
    // res.status(403).json({ err });
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
  }
};
