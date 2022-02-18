import styled from "styled-components";
import { Text } from "../Text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: white;
  opacity: 0.5;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
`;

export const Link = ({ item }) => {
  return (
    <Wrapper>
      <Text bold>{item.name}</Text>
      <Text>{item.url}</Text>
    </Wrapper>
  );
};
