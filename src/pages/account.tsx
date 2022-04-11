import { AccountModal } from "../views/AccountModal";
import { useRouter } from "next/router";
import { Modal } from "../components/Modal";

export default function Account() {
  const router = useRouter();
  return (
    <Modal
      title={"Account"}
      open={router.pathname == "/account" ? true : false}
      onClose={() => {
        router.back();
      }}
    >
      <AccountModal />
    </Modal>
  );
}
