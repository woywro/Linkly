import { SocialView } from '../views/SocialView';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="Social - Linkly" />
      <SocialView />
    </>
  );
}
