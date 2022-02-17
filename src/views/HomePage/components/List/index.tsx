import styled from "styled-components";
import { ListItem } from "../ListItem";
import { useSelector } from "react-redux";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width:100%:
  height: 100%;
  gap: 20px;
`;
export const List = () => {
  const Links = useSelector((state) => state.links);
  return (
    <StyledList>
      {Links.map((e) => {
        return <ListItem link={e} />;
      })}
    </StyledList>
  );
};
