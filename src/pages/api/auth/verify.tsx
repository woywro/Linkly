import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import breakpoints from "../../../theme/breakpoints";

export default function Verify() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Wrapper>
      <Text color={theme.colors.primaryText} size={"big"}>
        👏 Congratulations! Check your email inbox!
      </Text>
      <Button onClick={() => router.push("/")}>Back to login</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
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
