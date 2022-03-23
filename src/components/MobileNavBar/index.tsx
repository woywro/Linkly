import styled from "styled-components";
import { Text } from "../Text";
import { MobileNav } from "../MobileNav";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import breakpoints from "../../theme/breakpoints";
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
  display: none;
  width: 100%;
  height: 80px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.theme.colors.gradient};
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoints.device.lg} {
    display: flex;
  }
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
