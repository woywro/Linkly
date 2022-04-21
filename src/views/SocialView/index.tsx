import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseWrapperButton } from '../../components/CloseWrapperButton';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { OpenWrapperButton } from '../../components/OpenWrapperButton';
import useLoading from '../../hooks/useLoading';
import { getSharedWithYou } from '../../redux/actions/SharedActions';
import { RootState } from '../../redux/store';
import {
  LeftWrapper,
  PageContainer,
  RightWrapper,
  Row,
  Title,
  TitleWrapper,
} from '../style';
import { Feed } from './components/Feed';
import { ShareRequests } from './components/ShareRequests';
import { BiRefresh } from 'react-icons/bi';
import { getShareRequests } from '../../redux/actions/ShareRequestsActions';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../types/ThemeInterface';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion';

export const SocialView = () => {
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(requests, 'getSharedWithYou');
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
          <motion.div whileTap={{ scale: 0.95 }}>
            <BiRefresh
              style={{ fill: theme.colors.primaryText, cursor: 'pointer' }}
              size={'30px'}
              onClick={() => dispatch(getSharedWithYou())}
            />
          </motion.div>
        </TitleWrapper>
        {loading == true ? <LoadingSpinner /> : <Feed />}
      </LeftWrapper>
      <RightWrapper open={open}>
        <TitleWrapper style={{ justifyContent: 'flex-start' }}>
          <Title>Share Requests</Title>
          <motion.div whileTap={{ scale: 0.95 }}>
            <BiRefresh
              style={{ fill: theme.colors.primaryText, cursor: 'pointer' }}
              size={'30px'}
              onClick={() => dispatch(getShareRequests())}
            />
          </motion.div>
        </TitleWrapper>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <ShareRequests />
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
