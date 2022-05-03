import { HomePage } from '../views/HomePage';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="Home - Linkly" />
      <HomePage />
    </>
  );
}
