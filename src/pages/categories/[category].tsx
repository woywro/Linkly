import { CategoryView } from "../../views/CategoryView";
import { PrismaClient, collection, Link, Share, User } from "@prisma/client";
import { getSession } from "next-auth/react";
import { LinkInterface } from "../../types/LinkInterface";
import axios from "axios";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { prisma } from "../../../prisma/PrismaClient";

interface Props {
  collection: CollectionShareLinks;
}

export default function elementPage({ collection }: Props) {
  return <CategoryView collection={collection} />;
}

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const collection = await prisma.collection.findUnique({
    where: {
      id: params.category,
    },
    include: {
      links: {
        select: {
          id: true,
          title: true,
          url: true,
          collections: true,
          owner: true,
          modificationTimestamp: true,
        },
      },
      share: {
        select: {
          sharedWith: true,
        },
      },
    },
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }
  return {
    props: { collection },
  };
}
