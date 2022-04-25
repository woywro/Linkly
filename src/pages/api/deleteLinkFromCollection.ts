import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    try {
      const result = await prisma.Collection.update({
        where: {
          id: data.collectionId,
        },
        data: {
          links: { disconnect: { id: data.id } },
        },
      });
      res.status(200).json(result);
      res.end();
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
