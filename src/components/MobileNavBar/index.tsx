import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
      <Title>Link.ly</Title>
      <MobileNav open={open} setOpen={setOpen} />
    </MobileNavbarWrapper>
  );
};
