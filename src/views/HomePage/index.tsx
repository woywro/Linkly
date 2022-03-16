import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import styled from "styled-components";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useRouter } from "next/router";
import { SearchBar } from "../../components/Searchbar";

export const HomePage = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <LeftWrapper>
        <Wrapper>
          {/* <SearchInput placeholder="search" /> */}
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

const SearchInput = styled(Input)`
  background: none;
  border: 2px solid ${(props) => props.theme.colors.secondaryBg};
  width: 80%;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`;
