import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/PrismaClient';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    try {
      const result = await prisma.Collection.delete({
        where: {
          id: data.id,
        },
      });
      res.json({ result });
      res.end();
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
