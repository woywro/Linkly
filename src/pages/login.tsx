import { useSession, signIn, signOut } from 'next-auth/react';
import { LoginView } from '../views/LoginView';
import { NextSeo } from 'next-seo';

export default function Login() {
  return (
    <>
      <NextSeo title="Login - Linkly" />
      <LoginView />
    </>
  );
}
