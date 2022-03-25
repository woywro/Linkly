import styled from "styled-components";
import { Collection } from "../Collection";
import { useSelector, useDispatch } from "react-redux";
import { getCollections } from "../../../../redux/actions";
import { useEffect } from "react";
import breakpoints from "../../../../theme/breakpoints";
import { Title } from "../../../SocialView/style";
import Scrollbars from "react-custom-scrollbars-2";
import { EmptyState } from "../../../../components/EmptyState";
import { CollectionsWrapper, CollectionsList } from "./style";

export const CollectionList = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  return (
    <CollectionsWrapper>
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
    </CollectionsWrapper>
  );
};
