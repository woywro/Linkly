import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Modal } from '../../components/Modal';
import { LinkInterface } from '../../types/LinkInterface';
import { LinkModal } from '../../views/LinkModal';

interface Props {
  link: LinkInterface;
}

export default function editLink({ link }: Props) {
  const router = useRouter();
  return (
    <>
      <NextSeo title="EditLink - Linkly" />
      <Modal
        title={'Edit Link'}
        open={true}
        onClose={() => {
          router.back();
        }}
      >
        <LinkModal link={JSON.parse(link)} />
      </Modal>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      link: query.data,
    },
  };
}
