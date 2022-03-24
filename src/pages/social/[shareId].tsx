import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LinkInterface } from "../../types/LinkInterface";
import { SharedItemView } from "../../views/SharedItemView";
import { Modal } from "../../components/Modal";
import { prisma } from "../../../prisma/PrismaClient";

export default function SharedItem({ share }) {
  const router = useRouter();

  return (
    <Modal
      title={share.collection.value}
      open={true}
      onClose={() => {
        router.push("/");
      }}
    >
      <SharedItemView share={share} />
    </Modal>
  );
}

export async function getServerSideProps({ req, params, query }) {
  const session = await getSession({ req });
  const { shareId } = query;
  const share = await prisma.ShareRequest.findUnique({
    where: {
      id: shareId,
    },
    include: {
      collection: {
        select: {
          links: true,
          value: true,
          owner: true,
          id: true,
        },
      },
    },
  });
  if (!share) {
    return {
      notFound: true,
    };
  }
  return {
    props: { share },
  };
}
