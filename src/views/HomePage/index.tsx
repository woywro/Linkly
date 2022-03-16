import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import styled from "styled-components";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useRouter } from "next/router";
import { SearchBar } from "./components/Searchbar";

export const HomePage = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <LeftWrapper>
        <Wrapper>
          <SearchBar />
        </Wrapper>
        <List />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>History</PageTitle>
        <History />
      </RightWrapper>
    </PageContainer>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`;
