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
  RiBookReadLine,
} from "react-icons/ri";
import { useRouter } from "next/router";

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
  ${({ isActive }) =>
    isActive &&
    css`
      background: white;
      border-radius: 20px;
    `}
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  height: 50%;
`;

export const NavBar = () => {
  const router = useRouter();
  return (
    <Container>
      <Links>
        <Link href={`/add`} as={`/add`} passHref>
          <Item isActive={router.pathname == "/add" ? true : false}>
            <RiAddCircleLine />
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item isActive={router.pathname == "/" ? true : false}>
            <RiLayoutGridLine />
          </Item>
        </Link>
      </Links>
    </Container>
  );
};
