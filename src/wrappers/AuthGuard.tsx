import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { LoadingSpinner } from '../components/LoadingSpinner';
import Login from '../pages/login';
import { getCollections } from '../redux/actions/CollectionActions';
import { getHistory } from '../redux/actions/HistoryActions';
import { getLinks } from '../redux/actions/LinkActions';

interface Props {
  children: JSX.Element;
}

export const AuthGuard = ({ children }: Props) => {
  const { data: Session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (status == 'authenticated' && Session !== null) {
      dispatch(getLinks());
      dispatch(getHistory());
      dispatch(getCollections());
    }
  }, [status]);

  if (status == 'loading') {
    return (
      <Center>
        <LoadingSpinner />
      </Center>
    );
  }
  if (status == 'authenticated') {
    return <>{children}</>;
  }

  return <Login />;
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
