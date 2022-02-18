import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 36px;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

interface Props {
  title: string;
  children: JSX.Element;
}

export const PageTemplate = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
