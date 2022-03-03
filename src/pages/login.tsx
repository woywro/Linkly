import { useSession, signIn, signOut } from "next-auth/react";
import { LoginPage } from "../views/LoginPage";

export default function Login() {
  return <LoginPage />;
}
