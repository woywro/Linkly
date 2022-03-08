import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import styled from "styled-components";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useRouter } from "next/router";

export const HomePage = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <Button
        onClick={async () => {
          await axios.get("/api/getSharedCategories").then((res) => {
            console.log(res.data);
            // router.push(`/categories/${res.data.shares[0].category.value}`);
          });
        }}
      >
        g
      </Button>
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
