import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import styled from "styled-components";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";

export const HomePage = () => {
  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>Home</PageTitle>
        <List />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>History</PageTitle>
        <History />
      </RightWrapper>
    </PageContainer>
  );
};
