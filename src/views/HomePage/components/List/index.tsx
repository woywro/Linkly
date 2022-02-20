import styled from "styled-components";
import { ListItem } from "../ListItem";
import { useSelector } from "react-redux";
import { Link } from "../../../../components/Link/Link";
import { useEffect, useState } from "react";
import { generateHistory } from "../../../../utils/generateHistory";
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
export const List = () => {
  const Links = useSelector((state) => state.links);
  const History = useSelector((state) => state.history);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory.slice(0, 3));
  }, [History]);

  return (
    <StyledList>
      <ListItem title={"Recently opened"} col={"1"} row={"1/4"} bg="1">
        {history.map((e) => {
          return <Link item={e} />;
        })}
      </ListItem>
      <ListItem title={"Most visited"} col={"2/4"} row={"1/3"} bg="2">
        {Links.map((e) => {
          return <Link item={e} />;
        })}
      </ListItem>
      <ListItem title={"All links"} col={"4/5"} row={"1"} bg="4"></ListItem>
      <ListItem title={"ccc"} col={"4/5"} row={"2"} bg="5" />
    </StyledList>
  );
};
