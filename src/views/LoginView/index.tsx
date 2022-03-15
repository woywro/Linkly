import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { theme } from "../../theme/theme";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import loginLogo from "../../static/img/loginLogo.png";
import GoogleButton from "react-google-button";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.colors.priaryBg};
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
  margin: 15px;
  width: 70%;
`;
const Title = styled(Text)`
  font-size: 50px;
`;

const LoginButton = styled(Button)`
  border-radius: 10px;
  width: 50%;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  margin-top: 10px;
`;

const Divider = styled.div`
  width: 60%;
  background: ${(props) => props.theme.colors.secondaryText};
  height: 1px;
  margin: 20px;
`;

const LeftTitle = styled(Text)`
  font-size: 60px;
  padding: 30px;
`;

export const LoginView = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <LeftWrapper>
        <LeftTitle color={"white"}>Keep links organised.</LeftTitle>
      </LeftWrapper>
      <RightWrapper>
        <TextWrapper>
          <Title color={theme.colors.primaryText}>Sign in</Title>
          <Text color={theme.colors.primaryText}>
            Sign in to continue to this application
          </Text>
        </TextWrapper>
        <StyledInput placeholder="email" />
        <StyledInput placeholder="password" />
        <LoginButton>Log in</LoginButton>
        <Divider />
        <GoogleButton onClick={() => signIn()} />
      </RightWrapper>
    </Wrapper>
  );
};
