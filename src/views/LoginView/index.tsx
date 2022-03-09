import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { theme } from "../../theme/theme";
import { useSession, signIn, signOut } from "next-auth/react";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: white;
  border-radius: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
  width: 70%;
  margin-bottom: 50px;
`;
const StyledInput = styled(Input)`
  margin: 10px;
  width: 70%;
`;
const Title = styled(Text)`
  font-size: 50px;
`;

export const LoginView = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <LeftWrapper>
        <TextWrapper>
          <Title color={theme.colors.secondary}>Sign in</Title>
          <Text color={theme.colors.secondary}>
            Sign in to continue to this application
          </Text>
        </TextWrapper>
        <StyledInput placeholder="email" />
        <StyledInput placeholder="password" />
        <Button>Log in</Button>
        <Button onClick={() => signIn()}>Log in with Google</Button>
      </LeftWrapper>
      <RightWrapper>
        <p>ss</p>
      </RightWrapper>
    </Wrapper>
  );
};
