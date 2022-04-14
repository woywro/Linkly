import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import useLoading from "../../hooks/useLoading";
import { getSharedWithYou } from "../../redux/actions/SharedActions";
import { RootState } from "../../redux/store";
import {
  LeftWrapper,
  PageContainer,
  RightWrapper,
  Row,
  Title,
  TitleWrapper,
} from "../style";
import { Feed } from "./components/Feed";
import { ShareRequests } from "./components/ShareRequests";
import { BiRefresh } from "react-icons/bi";
import { getShareRequests } from "../../redux/actions/ShareRequestsActions";
import { useTheme } from "styled-components";
import { ThemeInterface } from "../../types/ThemeInterface";

export const SocialView = () => {
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(requests, "getSharedWithYou");
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const theme = useTheme() as ThemeInterface;

  useEffect(() => {
    dispatch(getSharedWithYou());
  }, []);

  return (
    <PageContainer>
      <LeftWrapper>
        <TitleWrapper>
          <Title>Social</Title>
          <BiRefresh
            style={{ fill: theme.colors.primaryText }}
            size={"30px"}
            onClick={() => dispatch(getSharedWithYou())}
          />
        </TitleWrapper>
        {loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <TitleWrapper>
          <Title>Share Requests</Title>
          <BiRefresh
            style={{ fill: theme.colors.primaryText }}
            size={"30px"}
            onClick={() => dispatch(getShareRequests())}
          />
        </TitleWrapper>
        <ShareRequests />
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
