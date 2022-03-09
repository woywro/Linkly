import { useSession, signIn, signOut } from "next-auth/react";
import { LoginView } from "../views/LoginView";

export default function Login() {
  return <LoginView />;
}
