import { PageContainer, LeftWrapper, RightWrapper, Title } from "../style";
import { useRouter } from "next/router";
import { Feed } from "./components/Feed";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Friends } from "./components/Friends";
import { ShareRequests } from "./components/ShareRequests";
import { useState } from "react";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";

export const SocialView = () => {
  const loadingState = useSelector((state) => state.LoadingReducer);
  const [open, setOpen] = useState();
  const router = useRouter();
  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <Title>Social</Title>
        {loadingState.loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Title>Share requests</Title>
        <ShareRequests />
      </RightWrapper>
    </PageContainer>
  );
};
