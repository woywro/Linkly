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
import { PrismaClient, collection, Link, Share, User } from "@prisma/client";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { Divider } from "../style";

interface Props {
  collection: CollectionShareLinks;
}

export const CategoryView = ({ collection }: Props) => {
  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{`categories/${collection.value}`}</PageTitle>
        <Links>
          {collection.links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
        <BasicInfo collection={collection} />
        <Divider />
        <PageTitle>Sharing</PageTitle>
        <Sharing collection={collection} />
      </RightWrapper>
    </PageContainer>
  );
};
