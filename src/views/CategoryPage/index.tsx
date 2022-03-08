import { useRouter } from "next/router";
import { CategoryInfo } from "./components/CategoryInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../HomePage/components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import { SharingInfo } from "./components/SharingInfo";
import axios from "axios";

interface Props {
  links: LinkInterface[];
}

export const CategoryPage = ({ links }: Props) => {
  const { asPath, query } = useRouter();
  const [tag, setTag] = useState();

  const getTag = async () => {
    const tagValue = query.category;
    await axios
      .get("/api/getSpecifiedTag", {
        data: {
          tagValue,
        },
      })
      .then((res) => {
        setTag(res.data.tags[0]);
      });
  };
  useEffect(() => {
    getTag();
  }, []);

  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{asPath}</PageTitle>
        <Links>
          {links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
        <CategoryInfo links={links} />
        <SharingInfo />
      </RightWrapper>
    </PageContainer>
  );
};
