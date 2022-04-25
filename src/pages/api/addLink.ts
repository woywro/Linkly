import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    const session = await getSession(req, res);
    console.log(session);
    try {
      const result = await prisma.Link.create({
        data: {
          title: data.title,
          url: data.url,
          owner: session?.user?.email,
          modificationTimestamp: Date.now().toString(),
          collections: {
            connectOrCreate: data.collectionValues.map(
              (collectionValue: string) => ({
                create: {
                  value: collectionValue,
                  valId: `${session?.user?.email}/${collectionValue}`,
                  modificationTimestamp: Date.now().toString(),
                  owner: session?.user?.email,
                  color: '',
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
            },
          },
          owner: true,
          modificationTimestamp: true,
        },
      });
      res.status(200).json(result);
      res.end();
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
