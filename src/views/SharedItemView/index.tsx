import { useRouter } from "next/router";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../HomePage/components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  links: LinkInterface[];
}

export const SharedItemView = ({ share }) => {
  const { asPath, query } = useRouter();
  const [tag, setTag] = useState();

  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{share.category.value}</PageTitle>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
      </RightWrapper>
    </PageContainer>
  );
};
