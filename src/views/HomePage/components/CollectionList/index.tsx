import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import useLoading from "../../../../hooks/useLoading";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { RootState } from "../../../../redux/store";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { collectionsOrderHelper } from "../../../../utils/collectionsOrderHelper";
import { Title } from "../../../style";
import { Collection } from "../Collection";
import {
  CollectionsList,
  CollectionsWrapper,
  ListReorderButton,
  TopWrapper,
} from "./style";
import { Scrollbars } from "react-custom-scrollbars-2";

export const CollectionList = () => {
  const collections = useSelector((state: RootState) => state.collections);

  const request = useSelector((state: RootState) => state.requestsLoading);
  const loading = useLoading(request, "getCollections");
  const [list, setList] = useState<CollectionInterface[]>(collections);
  const [collectionsOrder, setCollectionsOrder] = useLocalStorage(
    "collectionsOrder",
    ""
  );
  const [sortingMode, setSortingMode] = useState(false);

  const colors = [
    "#ee616a",
    "#f283d2",
    "#32aefd",
    "#e7c331",
    "#7f4ebf",
    "#19cdaa",
    "#4f66c3",
  ];

  useEffect(() => {
    const collectionsColorized = collections.map((e) => ({
      ...e,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    if (collectionsOrder == "") {
      setList(collectionsColorized);
    } else {
      const collectionsSorted = collectionsOrderHelper(collectionsColorized);
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
    <CollectionsWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TopWrapper>
            <Title>Collections</Title>
            <ListReorderButton
              onClick={saveListOrder}
              sortingMode={sortingMode}
            >
              {sortingMode ? "save" : "edit"}
            </ListReorderButton>
          </TopWrapper>
          <Scrollbars autoHeight>
            <CollectionsList
              axis="x"
              values={list}
              onReorder={setList}
              layoutScroll
            >
              {list.length == 0 ? (
                <EmptyState msg="You don't have link collections" />
              ) : (
                list.map((e: CollectionInterface) => {
                  return (
                    <Collection
                      name={e.value}
                      item={e}
                      key={e.id}
                      shareRequests={e.shareRequests}
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
