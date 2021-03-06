import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const [shareRequest, collection] = await prisma.$transaction([
      prisma.shareRequest.deleteMany({
        where: {
          collectionId: data.collectionId,
          receiverEmail: data.email,
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
          ownerId: true,
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
};
