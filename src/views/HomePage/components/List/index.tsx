import styled from "styled-components";
import { ListItem } from "../ListItem";
import { useSelector } from "react-redux";

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

  return (
    <StyledList>
      <ListItem link={"e"} title={"history"} col={"1"} row={"1/4"} bg="3" />
      <ListItem link={"e"} title={"ddd"} col={"2/4"} row={"1/3"} bg="2" />
      <ListItem link={"e"} title={"aaa"} col={"4/5"} row={"1"} bg="4" />
      <ListItem link={"e"} title={"ccc"} col={"4/5"} row={"2"} bg="5" />
    </StyledList>
  );
};
