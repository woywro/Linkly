import styled from "styled-components";
import { useSelector } from "react-redux";
import { generateHistory } from "../../../../utils/generateHistory";
import { useState, useEffect } from "react";
import { LinkItem } from "../../../../components/LinkItem";
import { LinkInterface } from "../../../../types/LinkInterface";
import { HistoryItem } from "../HistoryItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

export const History = () => {
  const History = useSelector((state) => state.history);
  const Links = useSelector((state) => state.links);

  const [history, setHistory] = useState<LinkInterface[]>([]);

  useEffect(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory.slice(0, 3));
  }, [History]);
  return (
    <Wrapper>
      {history.map((e) => {
        return <HistoryItem item={e} />;
      })}
    </Wrapper>
  );
};
