import styled, { useTheme } from "styled-components";
import { Text } from "../Text";

const StyledLinks = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const FieldLabels = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 5px;
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;

interface Props {
  children: JSX.Element[];
}

export const Links = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <StyledLinks>
      <FieldLabels>
        <Text bold color={theme.colors.secondary}>
          name
        </Text>
        <Text bold color={theme.colors.secondary}>
          owner
        </Text>
        <Text bold color={theme.colors.secondary}>
          last modified
        </Text>
        <Text bold color={theme.colors.secondary}>
          more
        </Text>
      </FieldLabels>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledLinks>
  );
};
