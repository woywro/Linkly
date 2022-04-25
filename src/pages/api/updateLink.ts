import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession(req,res);

  try {
    const result = await prisma.Link.update({
      where: { id: data.id },
      data: {
        title: data.title,
        url: data.url,
        owner: {session?.user?.email,
        modificationTimestamp: Date.now().toString(),
        collections: {
          set: [],
          connectOrCreate: data.collectionValues.map(
            (collectionValue: string) => ({
              create: {
                value: collectionValue,
                valId: `${session?.user?.email}/${collectionValue}`,
                modificationTimestamp: Date.now().toString(),
                color: '',
                owner: session?.user?.email,
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
            color: true,
            shareRequests: true,
          },
        },
        ownerId: true,
        owner: true,
        modificationTimestamp: true,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err });
  }
};
