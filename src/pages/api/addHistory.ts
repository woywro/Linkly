import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  try {
    const result = await prisma.History.create({
      data: {
        link: { connect: { id: data.linkId } },
        owner: { connect: { email: session.user.email } },
        timestamp: JSON.stringify(Date.now()),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err });
  }
};
