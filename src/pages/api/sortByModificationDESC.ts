import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    try {
      const link = await prisma.Link.findMany({
        orderBy: {
          modificationTimestamp: 'desc',
        },
        where: {
          owner: session.user.email,
        },
        select: {
          id: true,
          title: true,
          url: true,
          collections: true,
          owner: true,
          modificationTimestamp: true,
        },
      });
      res.status(200).json({ link });
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
