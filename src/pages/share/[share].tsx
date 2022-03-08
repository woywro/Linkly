import axios from "axios";
import { useRouter } from "next/router";
import { Modal } from "../../components/Modal";
import { ShareView } from "../../views/ShareView";

export default function AddLink({ categoryId }) {
  const router = useRouter();

  return (
    <Modal
      title={"Share category"}
      open={true}
      onClose={() => {
        router.push("/");
      }}
    >
      <ShareView categoryId={categoryId} />
    </Modal>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      categoryId: context.query.share,
    },
  };
}
