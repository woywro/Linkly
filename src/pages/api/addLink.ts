import { PrismaClient } from "@prisma/client";
import { triggerAsyncId } from "async_hooks";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  const session = await getSession({ req });
  const tags = data.tags.map((e) => {
    return {
      value: e.value,
      category: e.type,
    };
  });
  try {
    const result = await prisma.Link.create({
      data: {
        title: data.title,
        url: data.url,
        owner: { connect: { email: session.user.email } },
        tags: {
          connectOrCreate: data.tags.map((tag) => ({
            create: {
              value: tag.value,
              valId: `${session.user.email}/${tag.value}`,
              type: tag.type,
              owner: { connect: { email: session.user.email } },
            },
            where: {
              valId: `${session.user.email}/${tag.value}`,
            },
          })),
        },
      },
      select: {
        id: true,
        title: true,
        url: true,
        tags: true,
        ownerId: true,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while adding new link." });
  }
};
