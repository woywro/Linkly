import styled from "styled-components";
import { ListItem } from "../ListItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { generateHistory } from "../../../../utils/generateHistory";
import { LinkInterface } from "../../../../types/LinkInterface";
import { Modal } from "../../../../components/Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { LinkItem } from "../../../../components/LinkItem";
import { Text } from "../../../../components/Text";
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
export const List = () => {
  const router = useRouter();
  const Links = useSelector((state) => state.links);
  const History = useSelector((state) => state.history);

  const [history, setHistory] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory.slice(0, 3));
  }, [History]);

  return (
    <StyledList>
      <ListItem title={"Recently opened"} col={"1"} row={"1/4"} bg="1">
        {history.map((e) => {
          return <LinkItem item={e} />;
        })}
      </ListItem>
      <ListItem title={"Your Links"} col={"2/4"} row={"1/3"} bg="2">
        {Links.slice(0, 3).map((e) => {
          return <LinkItem item={e} />;
        })}
      </ListItem>
      <Link href={`/links`} as={`/links`} passHref>
        <ListItem title={"All links"} col={"4/5"} row={"1"} bg="4" />
      </Link>
      <ListItem title={"ccc"} col={"4/5"} row={"2"} bg="5" />
    </StyledList>
  );
};
