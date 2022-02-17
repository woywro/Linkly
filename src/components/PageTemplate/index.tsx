import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
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
