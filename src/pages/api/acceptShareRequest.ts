import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    try {
      const result = await prisma.ShareRequest.update({
        where: {
          id: data.id,
        },
        data: {
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
