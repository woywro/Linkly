import { useRouter } from "next/router";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const Sharing = () => {
  const theme = useTheme();
  const router = useRouter();
  const handleShare = () => {
    router.push(`/share/${data.tag[0].id}`);
    console.log(data);
  };
  return (
    <Container>
      <Text size={"big"} color={theme.colors.secondary}>
        Sharing:
      </Text>
      <Button onClick={handleShare}>Share</Button>
    </Container>
  );
};
