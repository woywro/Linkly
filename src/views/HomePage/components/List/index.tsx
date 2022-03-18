import { useRouter } from "next/router";
import { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LinkItem } from "../../../../components/LinkItem";
import { Links } from "../../../../components/Links";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { getCollections } from "../../../../redux/actions";
import { PageTitle } from "../../../style";
import { Collection } from "../Collection";
import { SortBar } from "../SortBar";

export const List = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLinks = useSelector((state) => state.links);
  const loadingState = useSelector((state) => state.LoadingReducer);
  const collections = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(getCollections());
  }, [Links]);

  return (
    <StyledList>
      <Scrollbars
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loadingState.loading == true ? (
          <LoadingSpinner />
        ) : (
          <Wrapper>
            <PageTitle>Collections</PageTitle>
            {collections.map((e) => {
              return <Collection name={e.value} id={e.id} />;
            })}
            <Divider />
            <PageTitle>Links</PageTitle>
            <Links>
              <SortBar />
              {userLinks.map((e) => {
                return <LinkItem item={e} />;
              })}
            </Links>
          </Wrapper>
        )}
      </Scrollbars>
    </StyledList>
  );
};

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  padding: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Divider = styled.div`
  height: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.colors.secondaryBg};
  width: 100%;
`;
