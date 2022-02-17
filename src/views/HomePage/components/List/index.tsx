import styled from "styled-components";
import { ListItem } from "../ListItem";
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width:100%:
  height: 100%;
  gap: 20px;
`;
export const List = () => {
  const Links = [
    {
      name: "facebook profile",
      url: "facebook.com",
      tags: ["facebook", "profile", "social"],
      color: "#ffd230",
    },
    {
      name: "instagram profile",
      url: "instagram.com",
      tags: ["instagram", "profile", "social"],
      color: "#ffd230",
    },
    {
      name: "youtube",
      url: "youtube.com",
      tags: ["video", "youtube"],
      color: "#ffd230",
    },
    {
      name: "youtube",
      url: "youtube.com",
      tags: ["video", "youtube"],
      color: "#ffd230",
    },
  ];
  return (
    <StyledList>
      {Links.map((e) => {
        return <ListItem link={e} />;
      })}
    </StyledList>
  );
};
