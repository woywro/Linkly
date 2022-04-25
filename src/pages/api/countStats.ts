import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    try {
      const [links, collections, shareRequests] = await prisma.$transaction([
        prisma.Link.count({
          where: {
            owner: session?.user?.email,
          },
        }),
        prisma.Collection.count({
          where: {
            owner: session?.user?.email,
          },
        }),
        prisma.ShareRequest.count({
          where: {
            owner: session?.user?.email,
          },
        }),
      ]);
      res.status(200).json({ links, collections, shareRequests });
      res.end();
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
