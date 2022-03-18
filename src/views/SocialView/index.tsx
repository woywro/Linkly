import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
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
        <PageTitle>Social</PageTitle>
        {loadingState.loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Friends</PageTitle>
        <Friends />
      </RightWrapper>
    </PageContainer>
  );
};
