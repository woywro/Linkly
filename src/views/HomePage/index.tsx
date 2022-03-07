import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import styled from "styled-components";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
`;

const StyledInput = styled(Input)`
  width: 200px;
  margin-right: 50px;
`;

export const HomePage = () => {
  return (
    <PageContainer>
      <LeftWrapper>
        <Header>
          <PageTitle>Home</PageTitle>
          <StyledInput placeholder="search" />
        </Header>
        <List />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>History</PageTitle>
        <History />
      </RightWrapper>
    </PageContainer>
  );
};
