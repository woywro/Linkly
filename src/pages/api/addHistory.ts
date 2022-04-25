import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    const session = await getSession(req, res);
    try {
      const result = await prisma.History.create({
        data: {
          link: { connect: { id: data.linkId } },
          owner: session?.user.email,
          timestamp: JSON.stringify(Date.now()),
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err });
    }
  }
);
