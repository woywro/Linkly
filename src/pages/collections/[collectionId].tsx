import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";
import { CollectionView } from "../../views/CollectionView";

interface Props {
  collection: CollectionShareLinks;
}

export default function elementPage({ collection }: Props) {
  return <CollectionView collection={collection} />;
}

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const collection = await prisma.Collection.findFirst({
    where: {
      id: params.collectionId,
      owner: { email: session.user.email },
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
      shareRequests: true,
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
