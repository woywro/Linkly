import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    let searchValue = req.query.search;
    try {
      const result = await prisma.ShareRequest.findMany({
        where: {
          owner: session?.user.email,
          isAccepted: true,
          receiver: {
            contains: searchValue,
            mode: 'insensitive',
          },
        },
        select: {
          receiver: true,
        },
      });
      res.status(200).json({ result });
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
