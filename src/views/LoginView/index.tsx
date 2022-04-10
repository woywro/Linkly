import { signIn } from "next-auth/react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";
import breakpoints from "../../theme/breakpoints";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { ThemeInterface } from "../../types/ThemeInterface";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 20px;
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

const Row = styled.div`
  display: flex;
  flex-flow: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;

const TestButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
`;

export const LoginView = () => {
  const theme = useTheme() as ThemeInterface;
  const [email, setEmail] = useState("");

  return (
    <Wrapper>
      <Logo mobile={false} />
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
        onClick={() => signIn("email", { email })}
      >
        Log in
      </LoginButton>
      <Divider />
      <Row>
        <GoogleLoginButton
          onClick={() => signIn("google")}
          style={{ display: "flex", justifyContent: "center" }}
          preventActiveStyles={true}
        >
          <span style={{ color: "grey" }}>Google</span>
        </GoogleLoginButton>
        <GithubLoginButton
          onClick={() => signIn("github")}
          preventActiveStyles={true}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style={{ color: "white" }}>Github</span>
        </GithubLoginButton>
      </Row>
    </Wrapper>
  );
};
