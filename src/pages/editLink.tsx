import { useRouter } from "next/router";
import { EditLink } from "../views/EditLink";
import { Modal } from "../components/Modal";
import { LinkInterface } from "../types/LinkInterface";

interface Props {
  item: LinkInterface;
}

export default function editLink({ item }: Props) {
  const router = useRouter();
  return (
    <Modal
      title={"Edit Link"}
      open={router.pathname == "/editLink" ? true : false}
      onClose={() => {
        router.push("/");
      }}
    >
      <EditLink item={JSON.parse(item)} />
    </Modal>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      item: context.query.item,
    },
  };
}
