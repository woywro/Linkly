import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  GithubLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import { useTheme } from 'styled-components';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import Verify from '../../pages/api/auth/verify';
import { ThemeInterface } from '../../types/ThemeInterface';
import {
  Divider,
  LoginButton,
  Row,
  StyledInput,
  TextWrapper,
  Title,
  Wrapper,
} from './style';

export const LoginView = () => {
  const theme = useTheme() as ThemeInterface;
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <Wrapper>
      <Logo mobile={false} />
      {router.asPath == '/auth/verify' ? (
        <Verify />
      ) : (
        <>
          <TextWrapper>
            <Title color={theme.colors.primaryText}>Sign in</Title>
            <Text color={theme.colors.primaryText}>
              Sign in to continue to this application
            </Text>
          </TextWrapper>
          <StyledInput
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <LoginButton
            whileTap={{ scale: 0.95 }}
            onClick={() => signIn('email', { email: email })}
          >
            Log in
          </LoginButton>
          <Divider />
          <Row>
            <GoogleLoginButton
              onClick={() => signIn('google')}
              style={{ display: 'flex', justifyContent: 'center' }}
              preventActiveStyles={true}
            >
              <span style={{ color: 'grey' }}>Google</span>
            </GoogleLoginButton>
            <GithubLoginButton
              onClick={() => signIn('github')}
              preventActiveStyles={true}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <span style={{ color: 'white' }}>Github</span>
            </GithubLoginButton>
          </Row>
        </>
      )}
    </Wrapper>
  );
};
