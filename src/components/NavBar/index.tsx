import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from "react-icons/ri";
import { Text } from "../Text";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavBarWrapper, Item, Links, LogoutBtn } from "./style";
import styled from "styled-components";
import logo1 from "../../static/img/logo1.png";
import logo2 from "../../static/img/logo2.png";
import Image from "next/image";
import { useTheme } from "styled-components";

export const NavBar = ({ setTheme }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const theme = useTheme();
  return (
    <NavBarWrapper>
      <Col>
        <LogoWrapper>
          {theme.colors.primaryBg == "#181818" ? (
            <Logo src={logo2} />
          ) : (
            <Logo src={logo1} />
          )}
        </LogoWrapper>
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

const LogoWrapper = styled.div`
  width: 100px;
  height: auto;
  padding: 0;
  margin-top: 20px;
`;
const Col = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled(Image)`
  object-fit: contain;
`;
