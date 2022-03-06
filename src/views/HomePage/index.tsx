import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { generateHistory } from "../../utils/generateHistory";
import { LinkItem } from "../../components/LinkItem";
import { LinkInterface } from "../../types/LinkInterface";
import { PageTemplate } from "../../components/PageTemplate";
import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";

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
  const [shares, setShares] = useState([]);

  const getShared = async () => {
    axios.get("/api/getShares").then((res) => {
      console.log(res.data.shares);
    });
  };

  return (
    <Container>
      <Button onClick={getShared}>getShared</Button>
      <LeftWrapper>
        <PageTemplate title={"Home"}>
          <List />
        </PageTemplate>
      </LeftWrapper>
      <RightWrapper>
        <PageTemplate title={"History"}>
          <History />
        </PageTemplate>
      </RightWrapper>
    </Container>
  );
};
