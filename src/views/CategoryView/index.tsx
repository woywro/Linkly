import { useRouter } from "next/router";
import { BasicInfo } from "./components/BasicInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../HomePage/components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import { Sharing } from "./components/Sharing";
import axios from "axios";

interface Props {
  links: LinkInterface[];
}

export const CategoryView = ({ links }: Props) => {
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
        <BasicInfo links={links} tag={tag} />
        <Sharing tag={tag} />
      </RightWrapper>
    </PageContainer>
  );
};
