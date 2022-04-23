import { useEffect, useState } from 'react';
import { CloseWrapperButton } from '../../components/CloseWrapperButton';
import { CollectionLinkItem } from './components/CollectionLinkItem';
import { Links } from '../../components/Links';
import { OpenWrapperButton } from '../../components/OpenWrapperButton';
import Scrollbars from 'react-custom-scrollbars-2';
import { LinkInterface } from '../../types/LinkInterface';
import {
  Divider,
  LeftWrapper,
  PageContainer,
  RightWrapper,
  Title,
  TitleWrapper,
  PathLink,
} from '../style';
import { CollectionInfo } from './components/CollectionInfo';
import { Sharing } from './components/Sharing';
import { EmptyState } from '../../components/EmptyState';
import { CollectionInterface } from '../../types/CollectionInterface';
import { useRouter } from 'next/router';
import { LinkItem } from '../../components/LinkItem';

interface Props {
  collectionFetched: CollectionInterface;
}

export const CollectionView = ({ collectionFetched }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<LinkInterface[] | undefined>([]);
  const [collection, setCollection] = useState<
    CollectionInterface | undefined
  >();

  useEffect(() => {
    setLinks(collectionFetched.links);
    setCollection(collectionFetched);
  }, [collectionFetched]);

  const router = useRouter();

  return (
    <PageContainer>
      <LeftWrapper>
        <TitleWrapper>
          <Title>
            <PathLink onClick={() => router.push('/')}>Collections</PathLink>/
            {collection?.value}
          </Title>
        </TitleWrapper>
        <Scrollbars
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Links>
            <>
              {links?.length == 0 ? (
                <EmptyState msg={'There are no links in this collection'} />
              ) : (
                links?.map((link: LinkInterface) => {
                  return (
                    <LinkItem item={link} setLinks={setLinks} links={links} />
                  );
                })
              )}
            </>
          </Links>
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <Scrollbars>
          {collection !== undefined && (
            <>
              <CloseWrapperButton onClick={() => setOpen(false)} />
              <Title>Info</Title>
              <CollectionInfo
                collection={collection}
                setCollection={setCollection}
              />
              <Divider />
              <Title>Sharing</Title>
              <Sharing collection={collection} />
            </>
          )}
        </Scrollbars>
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
