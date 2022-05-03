import { getSession } from 'next-auth/react';
import { prisma } from '../../../prisma/PrismaClient';
import { CollectionInterface } from '../../types/CollectionInterface';
import { CollectionView } from '../../views/CollectionView';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Modal } from '../../components/Modal';
import { ExportModal } from '../../views/ExportModal';
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> development

interface Props {
  collection: CollectionInterface;
}

export default function elementPage({ collection }: Props) {
  const router = useRouter();
  return (
    <>
      <NextSeo title={`${collection.value} export - Linkly`} />
      <Modal
        title={'Export collection'}
        open={true}
        onClose={() => {
          router.push('/');
        }}
      >
        <ExportModal collectionFetched={collection} />
      </Modal>
    </>
  );
}

<<<<<<< HEAD
export async function getServerSideProps({ req, params }) {
=======
interface ServerSideProps {
  req: NextApiRequest;
  params: any;
}

export async function getServerSideProps({ req, params }: ServerSideProps) {
>>>>>>> development
  const session = await getSession({ req });
  const result = await prisma.Collection.findFirst({
    where: {
      id: params.collectionId,
<<<<<<< HEAD
      owner: { email: session.user.email },
=======
      owner: { email: session?.user?.email },
>>>>>>> development
    },
    include: {
      links: {
        select: {
          id: true,
          title: true,
          url: true,
        },
      },
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
