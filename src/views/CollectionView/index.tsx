import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { LinkInterface } from "../../types/LinkInterface";
import {
  Divider,
  LeftWrapper,
  PageContainer,
  Title,
  RightWrapper,
} from "../style";
import { BasicInfo } from "./components/BasicInfo";
import { Sharing } from "./components/Sharing";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../theme/breakpoints";
import { useState } from "react";
import { Button } from "../../components/Button";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";

interface Props {
  collection: CollectionShareLinks;
}

export const CollectionView = ({ collection }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <Title>{`categories/${collection.value}`}</Title>
        <Links>
          {collection.links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Title>Info</Title>
        <BasicInfo collection={collection} />
        <Divider />
        <Title>Sharing</Title>
        <Sharing collection={collection} />
      </RightWrapper>
    </PageContainer>
  );
};
