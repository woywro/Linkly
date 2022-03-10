import styled from "styled-components";
import { Categories } from "../Categories";
import { Links } from "../Links";
import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { Text } from "../../../../components/Text";
import { useRouter } from "next/router";
import { Input } from "../../../../components/Input";
import { SortBar } from "../SortBar";

const StyledList = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

export const List = () => {
  const router = useRouter();
  const userLinks = useSelector((state) => state.links);
  const Tags = useSelector((state) => state.tags);
  const loadingState = useSelector((state) => state.LoadingReducer);

  return (
    <StyledList>
      {loadingState.loading == true ? (
        <LoadingSpinner />
      ) : (
        <Wrapper>
          <Categories />
          <Divider />
          <Links>
            <SortBar />
            {userLinks.map((e) => {
              return <LinkItem item={e} />;
            })}
          </Links>
        </Wrapper>
      )}
    </StyledList>
  );
};
