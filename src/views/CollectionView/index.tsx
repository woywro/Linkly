import { useEffect, useState } from "react";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { CollectionLinkItem } from "./components/CollectionLinkItem";
import { Links } from "../../components/Links";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
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

interface Props {
  collection: CollectionShareLinks;
}

export const CollectionView = ({ collection }: Props) => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState<LinkInterface[] | []>([]);

  useEffect(() => {
    setLinks(collection.links);
  }, [collection]);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
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
            {links.map((e: LinkInterface) => {
              return (
                <CollectionLinkItem
                  item={e}
                  setLinks={setLinks}
                  links={links}
                />
              );
            })}
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
    </PageContainer>
  );
};
