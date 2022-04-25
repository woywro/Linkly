import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/PrismaClient';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    try {
      const [shareRequest, collection] = await prisma.$transaction([
        prisma.shareRequest.deleteMany({
          where: {
            collectionId: data.collectionId,
            receiver: data.email,
          },
        }),
        prisma.collection.findUnique({
          where: {
            id: data.collectionId,
          },
          select: {
            color: true,
            id: true,
            modificationTimestamp: true,
            owner: true,
            valId: true,
            value: true,
            shareRequests: true,
          },
        }),
      ]);

      res.status(200).json({ shareRequest, collection });
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
