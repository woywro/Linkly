import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { FeedItem } from "../FeedItem";
import { Button } from "../../../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { setSharedWithYou } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
export const Feed = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [sharedCategories, setSharedCategories] = useState([]);
  const sharedWithYou = useSelector((state) => state.sharedWithYou);

  const getShared = async () => {
    await axios.get("/api/getSharedCategories").then((res) => {
      console.log(res.data);
      const categories = [];
      res.data.result.shareRequestsReceived.map((share) => {
        share.collection.shareId = share.id;
        categories.push(share.collection);
      });
      dispatch(setSharedWithYou(categories));
      console.log(categories);
    });
  };

  useEffect(() => {
    getShared();
  }, []);

  return (
    <Container>
      {sharedWithYou !== [] &&
        sharedWithYou.map((e) => {
          return <FeedItem category={e} />;
        })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30%;
`;
