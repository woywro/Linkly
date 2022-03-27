import { useRouter } from "next/router";
import { Add } from "../views/Add";
import { Modal } from "../components/Modal";

export default function AddLink() {
  const router = useRouter();

  return (
    <Modal
      title={"Add Link"}
      open={router.pathname == "/addLink" ? true : false}
      onClose={() => {
        router.back();
      }}
    >
      <Add />
    </Modal>
  );
}
