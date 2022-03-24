import styled from "styled-components";
import { Collection } from "../Collection";
import { useSelector, useDispatch } from "react-redux";
import { getCollections } from "../../../../redux/actions";
import { useEffect } from "react";
import breakpoints from "../../../../theme/breakpoints";
import { Title } from "../../../style";
import Scrollbars from "react-custom-scrollbars-2";
import { EmptyState } from "../../../../components/EmptyState";

export const CollectionList = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  return (
    <Wrapper>
      <Title>Collections</Title>
      <List>
        {collections.length == 0 ? (
          <EmptyState msg="You don't have link collections" />
        ) : (
          collections.map((e) => {
            return <Collection name={e.value} id={e.id} />;
          })
        )}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row;
  max-width: 100%;
  height: 100%;
`;
