import { AccountModal } from '../views/AccountModal';
import { useRouter } from 'next/router';
import { Modal } from '../components/Modal';
import { NextSeo } from 'next-seo';

export default function Account() {
  const router = useRouter();
  return (
    <>
      <NextSeo title="Account - Linkly" />
      <Modal
        title={'Account'}
        open={router.pathname == '/account' ? true : false}
        onClose={() => {
          router.back();
        }}
      >
        <AccountModal />
      </Modal>
    </>
  );
}
