import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { generateHistory } from "../../utils/generateHistory";
import { LinkItem } from "../../components/LinkItem";
import { LinkInterface } from "../../types/LinkInterface";
import { PageTemplate } from "../../components/PageTemplate";
import { List } from "./components/List";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 20px;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 25%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 10px;
`;

export const HomePage = () => {
  const Links = useSelector((state) => state.links);
  const History = useSelector((state) => state.history);

  const [history, setHistory] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory.slice(0, 3));
  }, [History]);

  return (
    <Container>
      <LeftWrapper>
        <PageTemplate title={"Home"}>
          {/* {Links.map((e) => {
            return <LinkItem item={e} />;
          })} */}
          <List />
        </PageTemplate>
      </LeftWrapper>
      <RightWrapper>
        {history.map((e) => {
          return <LinkItem item={e} />;
        })}
      </RightWrapper>
    </Container>
  );
};
