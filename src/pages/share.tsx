import { useRouter } from "next/router";
import { Modal } from "../components/Modal";
import { ShareView } from "../views/ShareView";

export default function AddLink() {
  const router = useRouter();

  return (
    <Modal
      title={"Share category"}
      open={router.pathname == "/share" ? true : false}
      onClose={() => {
        router.push("/");
      }}
    >
      <ShareView />
    </Modal>
  );
}
