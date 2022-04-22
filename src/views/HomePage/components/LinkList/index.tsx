import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components/Button';
import { EmptyState } from '../../../../components/EmptyState';
import { Links } from '../../../../components/Links';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import useLoading from '../../../../hooks/useLoading';
import { setLinks } from '../../../../redux/actions/LinkActions';
import { RootState } from '../../../../redux/store';
import { Title, TitleWrapper } from '../../../style';
import { LinkItem } from '../LinkItem';
import { SortBar } from '../SortBar';
import { SortDropdown } from '../SortDropdown';

export const LinkList = () => {
  const userLinks = useSelector((state: RootState) => state.links);
  const dispatch = useDispatch();
  const requests = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(requests, 'getLinks');
  const [loadingText, setLoadingText] = useState('load more');
  const router = useRouter();

  const handleLoadMore = () => {
    setLoadingText('loading');
    axios
      .get('/api/getLinks', {
        params: {
          cursor: userLinks[userLinks.length - 1].modificationTimestamp,
        },
      })
      .then((res) => {
        dispatch(setLinks(userLinks.concat(res.data.link)));
        setLoadingText('load more');
      });
  };

  return (
    <Links>
      {loading == true ? (
        <LoadingSpinner />
      ) : (
        <>
          <TitleWrapper>
            <Title>Links</Title>
            <SortDropdown />
          </TitleWrapper>
          <SortBar />
          {userLinks.length == 0 ? (
            <EmptyState
              msg="You don't have links"
              buttonText={'create one +'}
              onClick={() => router.push('/addLink')}
            />
          ) : (
            <>
              {userLinks.map((e) => {
                return <LinkItem item={e} key={e.id} />;
              })}
              <Button whileTap={{ scale: 0.9 }} onClick={handleLoadMore}>
                {loadingText}
              </Button>
            </>
          )}
        </>
      )}
    </Links>
  );
};
