import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from 'react-icons/ri';
import styled, { useTheme } from 'styled-components';
import { Logo } from '../Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Item, Links, LogoutBtn, NavBarWrapper, NavItemText } from './style';

export const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const theme = useTheme();

  return (
    <NavBarWrapper>
      <Logo mobile={false} />
      <Links>
        <Link href={`/addLink`} passHref>
          <Item
            isActive={router.pathname == '/addLink' ? true : false}
            whileTap={{ scale: 0.9 }}
          >
            <RiAddCircleLine />
            <NavItemText>Add</NavItemText>
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item
            isActive={router.pathname == '/' ? true : false}
            whileTap={{ scale: 0.9 }}
          >
            <RiLayoutGridLine />
            <NavItemText>Home</NavItemText>
          </Item>
        </Link>
        <Link href="/social" passHref>
          <Item
            isActive={router.pathname == '/social' ? true : false}
            whileTap={{ scale: 0.9 }}
          >
            <RiTeamLine />
            <NavItemText>Social</NavItemText>
          </Item>
        </Link>
        <Link href={`/account`} passHref>
          <Item
            isActive={router.pathname == '/account' ? true : false}
            whileTap={{ scale: 0.9 }}
          >
            <BiUser />
            <NavItemText>Account</NavItemText>
          </Item>
        </Link>
      </Links>
      <BottomSection>
        <Link href={`/account`} passHref>
          <Item
            style={{ padding: '5px', borderRadius: '10px' }}
            isActive={false}
            whileTap={{ scale: 0.9 }}
          >
            <BiUser />
            <NavItemText>Account</NavItemText>
          </Item>
        </Link>
        {session && (
          <LogoutBtn
            onClick={() => {
              signOut();
            }}
            whileTap={{ scale: 0.9 }}
          >
            <BiLogOut />
            <NavItemText>Log out</NavItemText>
          </LogoutBtn>
        )}
        <ThemeSwitcher />
      </BottomSection>
    </NavBarWrapper>
  );
};

const BottomSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-bottom: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative;
  background: ${(props) => props.theme.colors.secondaryBg};
`;
