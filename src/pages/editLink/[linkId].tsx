import { useRouter } from "next/router";
import { LinkModal } from "../../views/LinkModal";
import { Modal } from "../../components/Modal";
import { LinkInterface } from "../../types/LinkInterface";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

interface Props {
  link: LinkInterface;
}

export default function editLink({ link }: Props) {
  const router = useRouter();
  return (
    <Modal
      title={"Edit Link"}
      open={true}
      onClose={() => {
        router.push("/");
      }}
    >
      <LinkModal link={JSON.parse(link)} />
    </Modal>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      link: query.data,
    },
  };
}
