import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;

    try {
      const result = await prisma.Collection.update({
        where: { id: data.id },
        data: {
          color: data.color,
        },
        select: {
          id: true,
          value: true,
          links: true,
          modificationTimestamp: true,
          color: true,
          shareRequests: true,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
