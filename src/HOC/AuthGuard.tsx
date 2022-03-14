import { useRouter } from "next/router";
import { useEffect } from "react";
import { getHistory, getLinks, getTags } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Component } from "react";
import { useSession } from "next-auth/react";
import Login from "../pages/login";

interface Props {
  children: JSX.Element[];
}

export const AuthGuard = ({ children }: Props) => {
  const { data: Session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    } else {
      router.push("/");
      dispatch(getLinks());
      dispatch(getHistory());
      dispatch(getTags());
    }
  }, [status, Session]);

  if (status == "loading") {
    return <></>;
  }

  if (status == "authenticated") {
    return <>{children}</>;
  }

  return <Login />;

  //   return Session !== undefined && status == "loading" ? (
  //     <p>loading</p>
  //   ) : (
  //     status == "unauthenticated" && <>{children}</>
  //   );
};
