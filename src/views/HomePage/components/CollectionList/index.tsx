import styled from "styled-components";
import { Collection } from "../Collection";
import { useSelector, useDispatch } from "react-redux";
import { getCollections } from "../../../../redux/actions/CollectionActions";
import { useEffect, useState } from "react";
import { Title } from "../../../style";
import { EmptyState } from "../../../../components/EmptyState";
import { CollectionsWrapper, CollectionsList } from "./style";
import { RootState } from "../../../../redux/store";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import useLoading from "../../../../hooks/useLoading";
import { CollectionInterface } from "../../../../types/CollectionInterface";

export const CollectionList = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);

  const request = useSelector((state) => state.requestsLoading);
  const loading = useLoading(request, "getCollections");

  return (
    <CollectionsWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title>Collections</Title>
          <CollectionsList>
            {collections.length == 0 ? (
              <EmptyState msg="You don't have link collections" />
            ) : (
              collections.map((e: CollectionInterface) => {
                return (
                  <Collection
                    name={e.value}
                    id={e.id}
                    shareRequests={e.shareRequests}
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
