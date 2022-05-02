import axios from 'axios';
import moment from 'moment';
import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { RiFolder5Fill } from 'react-icons/ri';
import { TiTick, TiTimes } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Button } from '../../../../components/Button';
import { EmptyState } from '../../../../components/EmptyState';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { Text } from '../../../../components/Text';
import useLoading from '../../../../hooks/useLoading';
import { updateSharedWithYou } from '../../../../redux/actions/SharedActions';
import {
  deleteShareRequest,
  getShareRequests,
} from '../../../../redux/actions/ShareRequestsActions';
import { RootState } from '../../../../redux/store';
import { ShareRequestInterface } from '../../../../types/ShareRequestInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import {
  Row,
  ShareRequest,
  ShareRequestsWrapper,
  StyledCategory,
  Title,
} from './style';

export const ShareRequests = () => {
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const shareRequests = useSelector((state: RootState) => state.shareRequests);
  const loading = useLoading(requests, 'getShareRequests');

  useEffect(() => {
    dispatch(getShareRequests());
  }, []);

  const handleAcceptShareRequest = async (request: ShareRequestInterface) => {
    await axios
      .post('/api/acceptShareRequest', { id: request.id })
      .then((res) => {
        dispatch(updateSharedWithYou(res.data.result));
        dispatch(deleteShareRequest(request.id));
      });
  };

  const handleDeleteShareRequest = async (request: ShareRequestInterface) => {
    await axios
      .post('/api/deleteShareRequest', {
        collectionId: request.collection.id,
        email: request.receiver.email,
      })
      .then(() => {
        dispatch(deleteShareRequest(request.id));
      });
  };

  return (
    <Scrollbars style={{ height: '100%' }}>
      <ShareRequestsWrapper>
        {loading ? (
          <LoadingSpinner />
        ) : shareRequests.length == 0 ? (
          <EmptyState msg="You don't have share requests" />
        ) : (
          shareRequests.map((request) => {
            return (
              <ShareRequest key={request.id}>
                <Row>
                  <Title>{request.owner.email}</Title>
                  <Text color={theme.colors.secondaryText}>
                    {moment(parseInt(request.createdTimestamp)).format('LT')}
                  </Text>
                </Row>
                <StyledCategory>
                  <RiFolder5Fill
                    style={{ fill: theme.colors.yellow }}
                    size={'30px'}
                  />
                  <Text>{request.collection.value}</Text>
                </StyledCategory>
                <Row>
                  <Button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAcceptShareRequest(request)}
                    style={{ background: theme.colors.green }}
                  >
                    <TiTick />
                  </Button>
                  <Button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDeleteShareRequest(request)}
                    style={{ background: theme.colors.red }}
                  >
                    <TiTimes />
                  </Button>
                </Row>
              </ShareRequest>
            );
          })
        )}
      </ShareRequestsWrapper>
    </Scrollbars>
  );
};
