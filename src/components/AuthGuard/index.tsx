import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export const AuthGuard = ({ children }) => {
  const { data: Session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/login");
    }
  }, [status, Session]);

    if (status == "loading") {
      return <div>load</div>;
    }

    if (status == "unauthenticated") {
      return <>{children}</>;
    } else {
      return null;
    }

//   return Session !== undefined && status == "loading" ? (
//     <p>loading</p>
//   ) : (
//     status == "unauthenticated" && <>{children}</>
//   );
};
