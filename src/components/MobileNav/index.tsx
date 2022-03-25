import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { useCallback } from "react";
import {
  MobileNavWrapper,
  MobileNavItems,
  MobileNavItem,
  CloseButton,
} from "./style";
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from "react-icons/ri";

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export const MobileNav = ({ open, setOpen }: Props) => {
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router]);

  return (
    <MobileNavWrapper open={open}>
      <CloseButton onClick={() => setOpen(false)}>x</CloseButton>
      <MobileNavItems>
        <MobileNavItem
          isActive={router.pathname == "/" ? true : false}
          onClick={() => router.push("/")}
        >
          <RiLayoutGridLine style={{ fill: "white" }} /> Home
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == "/social" ? true : false}
          onClick={() => router.push("/social")}
        >
          <RiTeamLine style={{ fill: "white" }} /> Social
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == "/addLink" ? true : false}
          onClick={() => router.push("/addLink")}
        >
          <RiAddCircleLine style={{ fill: "white" }} /> Add Link
        </MobileNavItem>
      </MobileNavItems>
    </MobileNavWrapper>
  );
};
