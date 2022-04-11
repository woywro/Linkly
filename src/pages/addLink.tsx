import { useRouter } from "next/router";
import { Modal } from "../components/Modal";
import { LinkModal } from "../views/LinkModal";

export default function AddLink() {
  const router = useRouter();

  return (
    <Modal
      title={"Add Link"}
      open={router.pathname == "/addLink" ? true : false}
      onClose={() => {
        router.push("/");
      }}
    >
      <LinkModal />
    </Modal>
  );
}
