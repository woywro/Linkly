import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import useLoading from "../../../../hooks/useLoading";
import { RootState } from "../../../../redux/store";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { Title } from "../../../style";
import { Collection } from "../Collection";
import { CollectionsList, CollectionsWrapper, TopWrapper } from "./style";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { collectionsOrderHelper } from "../../../../utils/collectionsOrderHelper";
import { Button } from "../../../../components/Button";

export const CollectionList = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);

  const request = useSelector((state) => state.requestsLoading);
  const loading = useLoading(request, "getCollections");
  const [list, setList] = useState(collections);
  const [collectionsOrder, setCollectionsOrder] = useLocalStorage(
    "collectionsOrder",
    ""
  );
  const [sortingMode, setSortingMode] = useState(false);

  useEffect(() => {
    if (collectionsOrder == "") {
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
    <CollectionsWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TopWrapper>
            <Title>Collections</Title>
            <Button onClick={saveListOrder}>
              {sortingMode ? "save" : "edit"}
            </Button>
          </TopWrapper>
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
        </>
      )}
    </CollectionsWrapper>
  );
};
