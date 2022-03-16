import { useRouter } from "next/router";
import { useEffect } from "react";
import { getHistory, getLinks, getTags } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Component } from "react";
import { useSession } from "next-auth/react";
import Login from "../pages/login";
import { LoadingSpinner } from "../components/LoadingSpinner";
import styled from "styled-components";

interface Props {
  children: JSX.Element[];
}

export const AuthGuard = ({ children }: Props) => {
  const { data: Session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== "authenticated" && Session == null) {
      // router.push("/login");
    } else {
      router.push("/");
      dispatch(getLinks());
      dispatch(getHistory());
      dispatch(getTags());
    }
  }, [status, Session]);

  if (status == "loading") {
    return (
      <Center>
        <LoadingSpinner />
      </Center>
    );
  }
  if (status == "authenticated") {
    return <>{children}</>;
  }
  return <Login />;
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
