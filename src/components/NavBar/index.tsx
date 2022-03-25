import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from "react-icons/ri";
import { Text } from "../Text";
import { NavBarWrapper, Item, Links, LogoutBtn } from "./style";

export const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <NavBarWrapper>
      <Links>
        <Link href={`/addLink`}>
          <Item isActive={router.pathname == "/addLink" ? true : false}>
            <RiAddCircleLine />
            <Text>Add</Text>
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item isActive={router.pathname == "/" ? true : false}>
            <RiLayoutGridLine />
            <Text>Home</Text>
          </Item>
        </Link>
        <Link href="/social" passHref>
          <Item isActive={router.pathname == "/social" ? true : false}>
            <RiTeamLine />
            <Text>Social</Text>
          </Item>
        </Link>
        {session && (
          <LogoutBtn isActive={false} onClick={() => signOut()}>
            <BiLogOut />
            <Text>Log out</Text>
          </LogoutBtn>
        )}
      </Links>
    </NavBarWrapper>
  );
};
