import { useRouter } from "next/router";
import styled from "styled-components";
import { LeftWrapper, PageContainer, PageTitle, RightWrapper } from "../style";
import { History } from "./components/History";
import { List } from "./components/List";
import { SearchBar } from "./components/Searchbar";
import breakpoints from "../../theme/breakpoints";
import useMediaQuery from "../../hooks/useMediaQuery";

export const HomePage = () => {
  return (
    <PageContainer>
      <LeftWrapper>
        <SearchBar />
        <List />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>History</PageTitle>
        <History />
      </RightWrapper>
    </PageContainer>
  );
};
