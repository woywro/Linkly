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
import { namedRequestsInProgress } from "../../../../redux/Loading/requestSelectors";
import useLoading from "../../../../hooks/useLoading";

export const CollectionList = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   dispatch(getCollections());
  // }, []);
  const request = useSelector((state) => state.requestsLoading);
  const loadingState = useSelector((state) => state.loading);
  const loading = useLoading(request, "getCollections");

  useEffect(() => {
    // console.log(namedRequestsInProgress(request, "getLinks"));
    // setLoading(namedRequestsInProgress(request, "getLinks"));
  }, [request]);

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
              collections.map((e) => {
                return <Collection name={e.value} id={e.id} />;
              })
            )}
          </CollectionsList>
        </>
      )}
    </CollectionsWrapper>
  );
};
