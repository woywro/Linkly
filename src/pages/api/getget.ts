import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const link = await prisma.Link.findMany({
      select: {
        id: true,
      },
    });
    res.status(200).json({
      link,
    });
    res.end();
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
    }
  }
};
