import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { SortBar } from "../SortBar";

const StyledLinks = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
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
      <SortBar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledLinks>
  );
};
