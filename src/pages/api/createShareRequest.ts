import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession(req, res);
  try {
    const result = await prisma.ShareRequest.create({
      data: {
        owner: session?.user?.email,
        receiver: data.email,
        collection: { connect: { id: data.collectionId } },
        isAccepted: false,
        createdTimestamp: Date.now().toString(),
        idEmail: `${data.collectionId}-${data.email}`,
      },
      select: {
        collection: {
          select: {
            color: true,
            id: true,
            modificationTimestamp: true,
            ownerId: true,
            valId: true,
            value: true,
            shareRequests: true,
          },
        },
      },
    });
    res.status(200).json(result);
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
