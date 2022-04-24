import { HomePage } from '../views/HomePage';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home - Linkly" />
      <HomePage />
    </Layout>
  );
}
