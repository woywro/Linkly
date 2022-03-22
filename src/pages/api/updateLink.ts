import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });

  try {
    const result = await prisma.Link.update({
      where: { id: data.id },
      data: {
        title: data.title,
        url: data.url,
        owner: { connect: { email: session.user.email } },
        modificationTimestamp: Date.now().toString(),
        collections: {
          connectOrCreate: data.collections.map((collection) => ({
            create: {
              value: collection.value,
              valId: `${session.user.email}/${collection.value}`,
              type: collection.type,
              owner: { connect: { email: session.user.email } },
            },
            where: {
              valId: `${session.user.email}/${collection.value}`,
            },
          })),
        },
      },
      select: {
        id: true,
        title: true,
        url: true,
        collections: true,
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
