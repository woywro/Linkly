import styled, { useTheme } from "styled-components";
import { FeedItem } from "../FeedItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSharedWithYou, setSharedWithYou } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";

export const Feed = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sharedWithYou = useSelector((state) => state.sharedWithYou);

  return (
    <Container>
      {sharedWithYou.length == 0 ? (
        <EmptyState msg="You don't have shares" />
      ) : (
        sharedWithYou.map((col) => {
          return <FeedItem collection={col} />;
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;
