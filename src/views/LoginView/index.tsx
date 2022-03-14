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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c220 C 57.6%2c183 172.8%2c28.6 288%2c35 C 403.2%2c41.4 460.8%2c243.8 576%2c252 C 691.2%2c260.2 748.8%2c76.2 864%2c76 C 979.2%2c75.8 1036.8%2c245.8 1152%2c251 C 1267.2%2c256.2 1382.4%2c131.8 1440%2c102L1440 560L0 560z' fill='rgba(112%2c 31%2c 255%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c358 C 96%2c389.2 288%2c502.4 480%2c514 C 672%2c525.6 768%2c414.8 960%2c416 C 1152%2c417.2 1344%2c499.2 1440%2c520L1440 560L0 560z' fill='rgba(127%2c 57%2c 251%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: bottom;
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
