import { signIn } from "next-auth/react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";
import loginLogo from "../../static/img/loginLogo.png";
import breakpoints from "../../theme/breakpoints";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70%;
  background: ${(props) => props.theme.colors.primaryBg};
  border-radius: 30px;
  @media only screen and ${breakpoints.device.sm} {
    border-radius: 0px;
    width: 100%;
    height: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    border-radius: 0px;
    width: 100%;
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
  width: 70%;
  margin-bottom: 50px;
  @media only screen and ${breakpoints.device.sm} {
    margin-bottom: 20px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin-bottom: 10px;
  }
`;
const StyledInput = styled(Input)`
  margin: 15px;
  width: 70%;
  @media only screen and ${breakpoints.device.sm} {
    margin: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;
const Title = styled(Text)`
  font-size: 50px;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 30px;
  }
  @media only screen and ${breakpoints.device.lg} {
    font-size: 30px;
  }
`;

const LoginButton = styled(Button)`
  border-radius: 10px;
  width: 50%;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  margin-top: 10px;
  @media only screen and ${breakpoints.device.sm} {
    padding: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    padding: 5px;
  }
`;

const Divider = styled.div`
  width: 60%;
  background: ${(props) => props.theme.colors.secondaryBg};
  height: 1px;
  margin: 20px;
  @media only screen and ${breakpoints.device.sm} {
    margin: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;

const LoginImage = styled(Image)`
  border-radius: 20px;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export const LoginView = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Logo mobile={false} />
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
      <GoogleLoginButton
        style={{ width: "250px" }}
        onClick={() => signIn("google")}
      />
      <GithubLoginButton
        style={{ width: "250px" }}
        onClick={() => signIn("github")}
      />
    </Wrapper>
  );
};
