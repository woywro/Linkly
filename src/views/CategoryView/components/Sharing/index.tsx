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
  border-top: 1px solid ${(props) => props.theme.colors.secondaryBg};
`;

export const Sharing = ({ tag }) => {
  const theme = useTheme();
  const router = useRouter();
  const handleShare = () => {
    router.push(`/share/${tag.id}`);
    console.log(tag);
  };
  return (
    <Container>
      <Text size={"big"} color={theme.colors.primaryText}>
        Sharing:
      </Text>
      <Button onClick={handleShare}>Share</Button>
    </Container>
  );
};
