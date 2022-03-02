import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const SharingInfo = () => {
  const theme = useTheme();
  return (
    <Container>
      <Text size={"big"} color={theme.colors.secondary}>
        Sharing:
      </Text>
    </Container>
  );
};
