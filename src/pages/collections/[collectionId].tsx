import { getSession } from 'next-auth/react';
import { prisma } from '../../../prisma/PrismaClient';
import { CollectionInterface } from '../../types/CollectionInterface';
import { CollectionView } from '../../views/CollectionView';
import { NextSeo } from 'next-seo';

interface Props {
  collection: CollectionInterface;
}

export default function elementPage({ collection }: Props) {
  return (
    <>
      <NextSeo title={`${collection.value} - Linkly`} />{' '}
      <CollectionView collectionFetched={collection} />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const result = await prisma.Collection.findFirst({
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
  const collection = JSON.parse(JSON.stringify(result));

  if (!collection) {
    return {
      notFound: true,
    };
  }
  return {
    props: { collection },
  };
}
