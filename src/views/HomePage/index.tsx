import { useRouter } from "next/router";
import styled from "styled-components";
import { LeftWrapper, PageContainer, PageTitle, RightWrapper } from "../style";
import { History } from "./components/History";
import { List } from "./components/List";
import { SearchBar } from "./components/Searchbar";

export const HomePage = () => {
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
