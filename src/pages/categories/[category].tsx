import { CategoryPage } from "../../views/CategoryPage";
export default function elementPage({ data }) {
  return <CategoryPage category={data} />;
}

export async function getStaticProps(context) {
  const data = { name: context.params.category.toString() };
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const categories = [{ name: "programowanie" }];
  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return { paths, fallback: false };
}
