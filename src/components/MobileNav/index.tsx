import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { RiLayoutGridLine, RiTeamLine } from 'react-icons/ri';
import { ThemeSwitcher } from '../ThemeSwitcher';
import {
  CloseButton,
  MobileNavItem,
  MobileNavItems,
  MobileNavWrapper,
} from './style';

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
          isActive={router.pathname == '/' ? true : false}
          onClick={() => router.push('/')}
          whileTap={{ scale: 0.9 }}
        >
          <RiLayoutGridLine style={{ fill: 'white' }} /> Home
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == '/social' ? true : false}
          onClick={() => router.push('/social')}
          whileTap={{ scale: 0.9 }}
        >
          <RiTeamLine style={{ fill: 'white' }} /> Social
        </MobileNavItem>
        <MobileNavItem
          isActive={router.pathname == '/account' ? true : false}
          onClick={() => router.push('/account')}
          whileTap={{ scale: 0.9 }}
        >
          <BiUser style={{ fill: 'white' }} /> Account
        </MobileNavItem>
        <MobileNavItem
          isActive={false}
          onClick={() => signOut()}
          whileTap={{ scale: 0.9 }}
        >
          <BiLogOut style={{ fill: 'white' }} /> Sign out
        </MobileNavItem>
        <MobileNavItem isActive={false}>
          <ThemeSwitcher />
        </MobileNavItem>
      </MobileNavItems>
    </MobileNavWrapper>
  );
};
