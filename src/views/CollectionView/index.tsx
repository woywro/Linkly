import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { LinkInterface } from "../../types/LinkInterface";
import {
  Divider,
  LeftWrapper,
  PageContainer,
  PageTitle,
  RightWrapper,
} from "../style";
import { BasicInfo } from "./components/BasicInfo";
import { Sharing } from "./components/Sharing";

interface Props {
  collection: CollectionShareLinks;
}

export const CollectionView = ({ collection }: Props) => {
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
