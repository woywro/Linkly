import styled from "styled-components";
import { Text } from "../Text";
import { MobileNav } from "../MobileNav";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <MenuButton>
        <AiOutlineMenu
          size={25}
          style={{ fill: "white" }}
          onClick={() => setOpen(!open)}
        />
      </MenuButton>
      <Title>Link.ly</Title>
      <MobileNav open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.theme.colors.gradient};
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  position: absolute;
  left: 15px;
  cursor: pointer;
`;
