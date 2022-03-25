import { useRouter } from "next/router";
import { AddLink } from "../views/AddLink";
import { Modal } from "../components/Modal";

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
      <AddLink />
    </Modal>
  );
}
