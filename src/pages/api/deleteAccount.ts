import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession(req, res);

  try {
    const result = await prisma.User.delete({
      where: {
        email: session?.user?.email,
      },
    });
    res.json({ result });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
