import { CategoryView } from "../../views/CategoryView";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { LinkInterface } from "../../types/LinkInterface";

interface Props {
  links: LinkInterface[];
}

export default function elementPage({ links }: Props) {
  return <CategoryView links={links} />;
}

const prisma = new PrismaClient();

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const links = await prisma.Link.findMany({
    where: {
      owner: { email: session.user.email },
      tags: {
        some: {
          value: params.category,
        },
      },
    },
    select: {
      id: true,
      title: true,
      url: true,
      tags: true,
      ownerId: true,
      owner: true,
      modificationTimestamp: true,
    },
  });
  if (!links) {
    return {
      notFound: true,
    };
  }
  return {
    props: { links },
  };
}
