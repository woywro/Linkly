import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from "react-icons/ri";
import styled, { useTheme } from "styled-components";
import { Logo } from "../Logo";
import { Text } from "../Text";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Item, Links, LogoutBtn, NavBarWrapper } from "./style";

export const NavBar = ({ setTheme }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const theme = useTheme();
  return (
    <NavBarWrapper>
      <Col>
        <Logo mobile={false} />
        <ThemeSwitcher setTheme={setTheme} />
      </Col>
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
      </Links>
      {session && (
        <LogoutBtn isActive={false} onClick={() => signOut()}>
          <BiLogOut />
          <Text>Log out</Text>
        </LogoutBtn>
      )}
    </NavBarWrapper>
  );
};

const Col = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
