import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "../Logo";
import { MobileNav } from "../MobileNav";
import { MenuButton, MobileNavbarWrapper, Title } from "./style";

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileNavbarWrapper>
      <MenuButton>
        <AiOutlineMenu
          size={25}
          style={{ fill: "white" }}
          onClick={() => setOpen(!open)}
        />
      </MenuButton>
      <Logo mobile={true} />
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
