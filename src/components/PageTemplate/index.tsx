import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 10px;
`;
const Title = styled.h1`
  font-size: 35px;
  opacity: 0.5;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: ${(props) => props.theme.colors.secondary};
    height: 3px;
    width: 70%;
    bottom: -5px;
  }
`;
const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

interface Props {
  title: string;
  children: JSX.Element[];
}

export const PageTemplate = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
