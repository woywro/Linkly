import styled from "styled-components";
import { PageTemplate } from "../../components/PageTemplate";
import { useRouter } from "next/router";
import { Links } from "../../components/Links";
import { CategoryInfo } from "./components/CategoryInfo";

export const CategoryPage = ({ category }) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <LeftWrapper>
        <PageTemplate title={`${asPath}`}>
          <Links />
        </PageTemplate>
      </LeftWrapper>
      <RightWrapper>
        <CategoryInfo category={category} />
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 20px;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 25%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 10px;
`;
