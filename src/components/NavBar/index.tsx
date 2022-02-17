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
  background: white;
  border-radius: 20px;
  height: 90%;
  width: 100px;
  margin: 10px;
`;

const Item = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: black;
  padding: 5px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isActive }) =>
    isActive &&
    css`
      background: red;
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
          <Item isActive={false}>
            <RiAddCircleLine />
          </Item>
        </Link>
        <Link href="/" passHref>
          <Item isActive={router.pathname == "/" ? true : false}>
            <RiLayoutGridLine />
          </Item>
        </Link>
        <Link href="/folders" passHref>
          <Item isActive={router.pathname == "/folders" ? true : false}>
            <RiFolder5Line />
          </Item>
        </Link>
      </Links>
    </Container>
  );
};
