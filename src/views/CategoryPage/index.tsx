import styled from "styled-components";
import { PageTemplate } from "../../components/PageTemplate";
import { useRouter } from "next/router";
import { CategoryInfo } from "./components/CategoryInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";

interface Props {
  data: LinkInterface[];
}

export const CategoryPage = ({ data }: Props) => {
  const { asPath } = useRouter();

  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{asPath}</PageTitle>
        <Links>
          {data.links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
        <CategoryInfo data={data} />
      </RightWrapper>
    </PageContainer>
  );
};
