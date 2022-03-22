import { PageContainer, LeftWrapper, RightWrapper, Title } from "../style";
import { useRouter } from "next/router";
import { Feed } from "./components/Feed";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Friends } from "./components/Friends";

export const SocialView = () => {
  const loadingState = useSelector((state) => state.LoadingReducer);

  const router = useRouter();
  return (
    <PageContainer>
      <LeftWrapper>
        <Title>Social</Title>
        {loadingState.loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper>
        <Title>Friends</Title>
        <Friends />
      </RightWrapper>
    </PageContainer>
  );
};
