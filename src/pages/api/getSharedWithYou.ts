import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    try {
      const result = await prisma.ShareRequest.findMany({
        orderBy: {
          createdTimestamp: 'desc',
        },
        where: {
          receiver: session?.user.email,
          isAccepted: true,
        },
        select: {
          id: true,
          createdTimestamp: true,
          collection: {
            select: {
              id: true,
              value: true,
              owner: true,
              color: true,
              links: true,
            },
          },
        },
      });
      res.status(200).json({ result });
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
