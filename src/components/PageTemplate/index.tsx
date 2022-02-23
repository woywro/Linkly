import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 35px;
  opacity: 0.5;
  margin: 10px;
`;
const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageTemplate = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
