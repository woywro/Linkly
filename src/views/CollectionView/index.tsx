import { useEffect, useState } from "react";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { CollectionLinkItem } from "./components/CollectionLinkItem";
import { Links } from "../../components/Links";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import Scrollbars from "react-custom-scrollbars-2";
import { LinkInterface } from "../../types/LinkInterface";
import {
  Divider,
  LeftWrapper,
  PageContainer,
  RightWrapper,
  Title,
} from "../style";
import { CollectionInfo } from "./components/CollectionInfo";
import { Sharing } from "./components/Sharing";
import { EmptyState } from "../../components/EmptyState";
import { CollectionInterface } from "../../types/CollectionInterface";

interface Props {
  collection: CollectionInterface;
}

export const CollectionView = ({ collection }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<LinkInterface[] | undefined>([]);

  useEffect(() => {
    setLinks(collection.links);
  }, [collection]);

  return (
    <PageContainer>
      <LeftWrapper>
        <Title>{`categories/${collection.value}`}</Title>
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Links>
            <>
              {links?.length == 0 ? (
                <EmptyState msg={"There are no links in this collection"} />
              ) : (
                links?.map((link: LinkInterface) => {
                  return (
                    <CollectionLinkItem
                      item={link}
                      setLinks={setLinks}
                      links={links}
                    />
                  );
                })
              )}
            </>
          </Links>
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Title>Info</Title>
        <CollectionInfo collection={collection} />
        <Divider />
        <Title>Sharing</Title>
        <Sharing collection={collection} />
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
