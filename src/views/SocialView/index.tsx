import { PageContainer, LeftWrapper, RightWrapper, Title } from "../style";
import { useRouter } from "next/router";
import { Feed } from "./components/Feed";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ShareRequests } from "./components/ShareRequests";
import { useState } from "react";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSharedWithYou } from "../../redux/actions";
import { RootState } from "../../redux/store";

export const SocialView = () => {
  const loadingState = useSelector((state: RootState) => state.loadingReducer);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSharedWithYou());
  }, []);

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
