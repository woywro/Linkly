import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const session = await getSession({ req });
  console.log(data);
  try {
    const result = await prisma.ShareRequest.create({
      data: {
        owner: { connect: { email: session.user?.email } },
        receiver: { connect: { email: data.email } },
        collection: { connect: { id: data.collectionId } },
        isAccepted: false,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err });
  }
};
