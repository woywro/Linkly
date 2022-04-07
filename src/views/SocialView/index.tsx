import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import useLoading from "../../hooks/useLoading";
import { getSharedWithYou } from "../../redux/actions/SharedActions";
import { RootState } from "../../redux/store";
import { LeftWrapper, PageContainer, RightWrapper, Title } from "../style";
import { Feed } from "./components/Feed";
import { ShareRequests } from "./components/ShareRequests";

export const SocialView = () => {
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(requests, "getSharedWithYou");
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSharedWithYou());
  }, []);

  return (
    <PageContainer>
      <LeftWrapper>
        <Title>Social</Title>
        {loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Title>Share requests</Title>
        <ShareRequests />
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
