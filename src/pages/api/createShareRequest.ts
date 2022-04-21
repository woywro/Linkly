import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const [shareRequest, collection] = await prisma.$transaction([
      prisma.ShareRequest.create({
        data: {
          owner: { connect: { email: session.user?.email } },
          receiver: { connect: { email: data.email } },
          collection: { connect: { id: data.collectionId } },
          isAccepted: false,
          createdTimestamp: Date.now().toString(),
          idEmail: `${data.collectionId}-${data.email}`,
        },
      }),
      prisma.Collection.update({
        where: { id: data.collectionId },
        data: {
          isShared: true,
        },
        select: {
          color: true,
          id: true,
          modificationTimestamp: true,
          ownerId: true,
          valId: true,
          value: true,
          shareRequests: true,
          isShared: true,
        },
      }),
    ]);
    res.status(200).json({ shareRequest, collection });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === 'P2025') {
        res.status(500).json('This user does not exist');
      }
      if (err.code === 'P2002') {
        res
          .status(500)
          .json('This collection is already shared with this user');
      }
    }
  }
};
