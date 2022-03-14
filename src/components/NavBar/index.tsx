import styled from "styled-components";
import Link from "next/link";
import { css } from "styled-components";
import {
  RiChat1Line,
  RiLayoutGridLine,
  RiNotification4Line,
  RiFolder5Line,
  RiFolder5Fill,
  RiAddCircleLine,
  RiTeamLine,
  RiBookReadLine,
} from "react-icons/ri";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
const Container = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 70%;
  width: 70px;
  margin: 10px;
  margin-right: 0;
`;

const Item = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryText};
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${(props) => props.theme.colors.primary};
      border-radius: 20px;
    `};
  &:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  height: 50%;
`;

const LogoutBtn = styled(Item)`
  position: absolute;
  bottom: 30px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`;

export const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <Container>
      <Links>
        <Link href={`/addLink`}>
          <Item isActive={router.pathname == "/addLink" ? true : false}>
            <RiAddCircleLine />
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item isActive={router.pathname == "/" ? true : false}>
            <RiLayoutGridLine />
          </Item>
        </Link>
        <Link href="/social" passHref>
          <Item isActive={router.pathname == "/social" ? true : false}>
            <RiTeamLine />
          </Item>
        </Link>
        {session && (
          <LogoutBtn isActive={false} onClick={() => signOut()}>
            <BiLogOut />
          </LogoutBtn>
        )}
      </Links>
    </Container>
  );
};
