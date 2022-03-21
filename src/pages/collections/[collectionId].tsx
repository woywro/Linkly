import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { CollectionView } from "../../views/CollectionView";

interface Props {
  collection: CollectionShareLinks;
}

export default function elementPage({ collection }: Props) {
  return <CollectionView collection={collection} />;
}

export async function getServerSideProps({ params }) {
  const collection = await prisma.Collection.findUnique({
    where: {
      id: params.collectionId,
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
