import { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { CloseWrapperButton } from '../../components/CloseWrapperButton';
import { OpenWrapperButton } from '../../components/OpenWrapperButton';
import { LeftWrapper, PageContainer, RightWrapper } from '../style';
import { CollectionList } from './components/CollectionList';
import { History } from './components/History';
import { LinkList } from './components/LinkList';
import { SearchBar } from './components/Searchbar';
import { FastLinks } from './components/FastLinks';

export const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <Scrollbars
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowX: 'hidden',
          }}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          <SearchBar />
          <CollectionList />
          <LinkList />
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <History />
        <FastLinks />
      </RightWrapper>
      <OpenWrapperButton onClick={() => setOpen(true)} />
    </PageContainer>
  );
};
