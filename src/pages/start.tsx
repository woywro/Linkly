import { getSession } from 'next-auth/react';
import { prisma } from '../../prisma/PrismaClient';
import { CollectionInterface } from '../types/CollectionInterface';
import { StartView } from '../views/StartView';

interface Props {
  collections: CollectionInterface[];
}

export default function Start({ collections }: Props) {
  return <StartView collections={collections} />;
}

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const result = await prisma.Collection.findMany({
    orderBy: {
      modificationTimestamp: 'desc',
    },
    take: 4,
    where: {
      owner: { email: session.user.email },
    },
    select: {
      id: true,
      value: true,
      modificationTimestamp: true,
      color: true,
      links: true,
    },
  });
  const collections = JSON.parse(JSON.stringify(result));

  if (!collections) {
    return {
      notFound: true,
    };
  }
  return {
    props: { collections },
  };
}
