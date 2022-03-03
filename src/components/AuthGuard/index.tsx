import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

interface Props {
  children: JSX.Element[];
}

export const AuthGuard = ({ children }: Props) => {
  const { data: Session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [status, Session]);

  if (status == "loading") {
    return <></>;
  }

  if (status == "authenticated") {
    return <>{children}</>;
  }

  return null;

  //   return Session !== undefined && status == "loading" ? (
  //     <p>loading</p>
  //   ) : (
  //     status == "unauthenticated" && <>{children}</>
  //   );
};
