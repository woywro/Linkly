import styled from "styled-components";
import { Text } from "../Text";

interface Props {
  msg: String;
}

export const EmptyState = ({ msg }: Props) => {
  return (
    <Wrapper>
      <Text>{msg}</Text>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryBg};
  border-radius: 30px;
  padding: 20px;
`;
