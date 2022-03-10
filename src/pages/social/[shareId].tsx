import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LinkInterface } from "../../types/LinkInterface";
import { SharedItemView } from "../../views/SharedItemView";
import { Modal } from "../../components/Modal";

export default function SharedItem({ share }) {
  console.log(share);
  const router = useRouter();

  return (
    <Modal
      title={share.category.value}
      open={true}
      onClose={() => {
        router.push("/");
      }}
    >
      <SharedItemView share={share} />
    </Modal>
  );
}

const prisma = new PrismaClient();

export async function getServerSideProps({ req, params, query }) {
  const session = await getSession({ req });
  const { shareId } = query;
  const share = await prisma.Share.findUnique({
    where: {
      id: shareId,
    },
    include: {
      category: {
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
