import { useRouter } from "next/router";
import { BasicInfo } from "./components/BasicInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../HomePage/components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import { Sharing } from "./components/Sharing";
import axios from "axios";
import { useDispatch } from "react-redux";

interface Props {
  links: LinkInterface[];
}

export const CategoryView = ({ tag }: Props) => {
  useEffect(() => {
    console.log(tag);
  }, [tag]);

  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{`categories/${tag.value}`}</PageTitle>
        <Links>
          {tag.links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
        <BasicInfo tag={tag} />
        <Sharing tag={tag} />
      </RightWrapper>
    </PageContainer>
  );
};
