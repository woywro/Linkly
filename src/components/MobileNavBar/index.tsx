import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Logo } from '../Logo';
import { MobileNav } from '../MobileNav';
import { AddLinkButton, MenuButton, MobileNavbarWrapper, Title } from './style';
import { AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/router';

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <MobileNavbarWrapper>
      <MenuButton whileTap={{ scale: 0.9 }}>
        <AiOutlineMenu
          size={25}
          style={{ fill: 'white' }}
          onClick={() => setOpen(!open)}
        />
      </MenuButton>
      <Logo mobile={true} />
      <AddLinkButton whileTap={{ scale: 0.9 }}>
        <AiOutlinePlus
          size={25}
          style={{ fill: 'white' }}
          onClick={() => router.push('/addLink')}
        />
      </AddLinkButton>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
