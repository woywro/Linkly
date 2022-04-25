import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Modal } from '../components/Modal';
import Verify from '../pages/api/auth/verify';
import Login from '../pages/login';
import { getCollections } from '../redux/actions/CollectionActions';
import { getHistory } from '../redux/actions/HistoryActions';
import { getLinks } from '../redux/actions/LinkActions';
import { useUser } from '@auth0/nextjs-auth0';

interface Props {
  children: JSX.Element;
}

export const AuthGuard = ({ children }: Props) => {
  const { user, error, isLoading } = useUser();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      dispatch(getLinks());
      // dispatch(getHistory());
      // dispatch(getCollections());
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return <>{children}</>;
  }
  return <a href="/api/auth/login">Login</a>;
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
