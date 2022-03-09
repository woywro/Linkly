import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useRouter } from "next/router";
import { Feed } from "./components/Feed";

export const SocialView = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>Social</PageTitle>
        <Feed />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Friends</PageTitle>
      </RightWrapper>
    </PageContainer>
  );
};
