import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);
  try {
    const limit = 5;
    const cursor = req.query.cursor ?? '';
    const cursorObj = cursor == '' ? undefined : { timestamp: cursor };
    const history = await prisma.History.findMany({
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      orderBy: {
        timestamp: 'desc',
      },
      where: {
        owner: session?.user.email,
      },
      select: {
        link: true,
        timestamp: true,
      },
    });
    res.status(200).json({ history });
  } catch (err) {
    // if (err instanceof PrismaClientKnownRequestError) {
    //   console.log(err);
    // }
  }
};
