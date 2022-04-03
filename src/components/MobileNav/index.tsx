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
import { ThemeSwitcher } from "../ThemeSwitcher";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";

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
          onClick={() => router.back()}
          whileTap={{ scale: 0.9 }}
        >
          <RiLayoutGridLine style={{ fill: "white" }} /> Home
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == "/social" ? true : false}
          onClick={() => router.push("/social")}
          whileTap={{ scale: 0.9 }}
        >
          <RiTeamLine style={{ fill: "white" }} /> Social
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == "/addLink" ? true : false}
          onClick={() => router.push("/addLink")}
          whileTap={{ scale: 0.9 }}
        >
          <RiAddCircleLine style={{ fill: "white" }} /> Add Link
        </MobileNavItem>
        <MobileNavItem
          isActive={false}
          onClick={() => signOut()}
          whileTap={{ scale: 0.9 }}
        >
          <BiLogOut style={{ fill: "white" }} /> Sign out
        </MobileNavItem>
        <MobileNavItem isActive={false} whileTap={{ scale: 0.9 }}>
          <ThemeSwitcher />
        </MobileNavItem>
      </MobileNavItems>
    </MobileNavWrapper>
  );
};
