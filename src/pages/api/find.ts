import { prisma } from '../../../prisma/PrismaClient';
import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { Collection, Link, ShareRequest } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let searchValue = req.query.search;
  const session = await getSession(req, res);
  try {
    const [links, collections] = await prisma.$transaction([
      prisma.Link.findMany({
        where: {
          title: { contains: searchValue, mode: 'insensitive' },
          owner: session?.user.email,
        },
      }),
      prisma.Collection.findMany({
        where: {
          value: {
            contains: searchValue,
            mode: 'insensitive',
          },
          owner: session?.user.email,
        },
      }),
    ]);
    res.status(200).json({ links, collections });
  } catch (err) {
    // res.status(403).json({ err });
    if (err instanceof PrismaClientKnownRequestError) {
    }
  }
};
