import { useSession, signIn, signOut } from "next-auth/react";
import { LoginPage } from "../views/LoginPage";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <LoginPage />;
}
