import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    try {
      const collections = await prisma.Collection.findMany({
        where: {
          owner: session?.user?.email,
        },
        orderBy: {
          modificationTimestamp: 'desc',
        },
        select: {
          id: true,
          value: true,
          modificationTimestamp: true,
          shareRequests: true,
          color: true,
        },
      });
      res.status(200).json({ collections });
      res.end();
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
