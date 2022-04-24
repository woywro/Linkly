import { SocialView } from '../views/SocialView';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Social - Linkly" />
      <SocialView />
    </Layout>
  );
}
