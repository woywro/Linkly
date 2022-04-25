import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    try {
      const result = await prisma.ShareRequest.findMany({
        where: {
          owner: session?.user.email,
          isAccepted: false,
        },
        select: {
          id: true,
          owner: true,
          receiver: true,
          collection: true,
          isAccepted: true,
          createdTimestamp: true,
        },
      });
      res.status(200).json({ result });
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
