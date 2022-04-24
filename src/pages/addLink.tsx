import { useRouter } from 'next/router';
import { Modal } from '../components/Modal';
import { LinkModal } from '../views/LinkModal';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/Layout';

export default function AddLink() {
  const router = useRouter();

  return (
    <Layout>
      <NextSeo title="AddLink - Linkly" />
      <Modal
        title={'Add Link'}
        open={router.pathname == '/addLink' ? true : false}
        onClose={() => {
          router.push('/');
        }}
      >
        <LinkModal />
      </Modal>
    </Layout>
  );
}
