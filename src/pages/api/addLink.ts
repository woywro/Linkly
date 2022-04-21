import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.Link.create({
      data: {
        title: data.title,
        url: data.url,
        owner: { connect: { email: session?.user?.email } },
        modificationTimestamp: Date.now().toString(),
        collections: {
          connectOrCreate: data.collectionValues.map(
            (collectionValue: string) => ({
              create: {
                value: collectionValue,
                valId: `${session?.user?.email}/${collectionValue}`,
                modificationTimestamp: Date.now().toString(),
                owner: { connect: { email: session?.user?.email } },
                color: '',
                isShared: false,
              },
              where: {
                valId: `${session?.user?.email}/${collectionValue}`,
              },
            })
          ),
        },
      },
      select: {
        id: true,
        title: true,
        url: true,
        collections: {
          select: {
            id: true,
            owner: true,
            value: true,
            links: true,
            modificationTimestamp: true,
            shareRequests: true,
            color: true,
            isShared: true,
          },
        },
        ownerId: true,
        owner: true,
        modificationTimestamp: true,
      },
    });
    res.status(200).json(result);
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
