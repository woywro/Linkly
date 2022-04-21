import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyState } from '../../../../components/EmptyState';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import useLoading from '../../../../hooks/useLoading';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { RootState } from '../../../../redux/store';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { collectionsOrderHelper } from '../../../../utils/collectionsOrderHelper';
import { Row, Title } from '../../../style';
import { Collection } from '../Collection';
import {
  CollectionsList,
  CollectionsWrapper,
  ListReorderButton,
  TopWrapper,
} from './style';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ColorTagDropdown } from '../ColorTagDropdown';

export const CollectionList = () => {
  const collections = useSelector((state: RootState) => state.collections);

  const request = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(request, 'getCollections');
  const [list, setList] = useState<CollectionInterface[]>(collections);
  const [collectionsOrder, setCollectionsOrder] = useLocalStorage(
    'collectionsOrder',
    ''
  );
  const [sortingMode, setSortingMode] = useState(false);

  useEffect(() => {
    if (collectionsOrder == '') {
      setList(collections);
    } else {
      const collectionsSorted = collectionsOrderHelper(collections);
      setList(collectionsSorted);
    }
  }, [collections]);

  const saveListOrder = () => {
    setSortingMode(!sortingMode);
    setCollectionsOrder(
      list.map((e, i) => {
        return { id: e.id, index: i };
      })
    );
  };

  return (
    <CollectionsWrapper
      animate={{ x: [-50, 0] }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TopWrapper>
            <Title>Collections</Title>
            <Row style={{ width: 'auto' }}>
              <ListReorderButton
                onClick={saveListOrder}
                sortingMode={sortingMode}
              >
                {sortingMode ? 'save' : 'edit'}
              </ListReorderButton>
              <ColorTagDropdown setList={setList} list={list} />
            </Row>
          </TopWrapper>
          <Scrollbars autoHeight>
            <CollectionsList
              sortingMode={sortingMode}
              axis="x"
              values={list}
              onReorder={setList}
              layoutScroll
            >
              {list.length == 0 ? (
                <EmptyState msg="You don't have link collections" />
              ) : (
                list.map((collection: CollectionInterface) => {
                  return (
                    <Collection
                      key={collection.id}
                      item={collection}
                      sortingMode={sortingMode}
                    />
                  );
                })
              )}
            </CollectionsList>
          </Scrollbars>
        </>
      )}
    </CollectionsWrapper>
  );
};
