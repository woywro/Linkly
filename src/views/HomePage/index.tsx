import styled from "styled-components";
import { List } from "./components/List";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const HomePage = () => {
  return (
    <Container>
      <List />
    </Container>
  );
};
