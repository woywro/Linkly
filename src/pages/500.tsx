import styled from "styled-components";
import { Text } from "../components/Text";

export default function Custom404() {
  return (
    <Wrapper>
      <Title>500</Title>
      <Text size={"big"}>OPPS! An Error occured</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Title = styled.h1`
  font-size: 80px;
`;
