import { CategoryPage } from "../../views/CategoryPage";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function elementPage({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <CategoryPage data={data} />;
}

const prisma = new PrismaClient();

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const data = await prisma.Link.findMany({
    where: {
      owner: { email: session.user.email },
      categories: {
        has: params.category,
      },
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
