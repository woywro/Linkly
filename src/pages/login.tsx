import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {

  const { data: session } = useSession();

  if (session) {

    return (

      <div>

        Welcome user<br />

        <button onClick={() => signOut()}>Sign out</button>

      </div>

    );

  }

  return (

    <div>

      Click to sign into your user account <br />

      <button onClick={() => signIn()}>Sign in</button>

    </div>

  );

}