import { useRouter } from "next/router";
import { BasicInfo } from "./components/BasicInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import { Sharing } from "./components/Sharing";
import axios from "axios";
import { useDispatch } from "react-redux";
import { PrismaClient, Tag, Link, Share, User } from "@prisma/client";
import { TagShareLinks } from "../../types/TagShareLinks";
import { Divider } from "../style";

interface Props {
  tag: TagShareLinks;
}

export const CategoryView = ({ tag }: Props) => {
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
        <Divider />
        <PageTitle>Sharing</PageTitle>
        <Sharing tag={tag} />
      </RightWrapper>
    </PageContainer>
  );
};
