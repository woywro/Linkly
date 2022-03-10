import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { FeedItem } from "../FeedItem";
import { Button } from "../../../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
export const Feed = () => {
  const theme = useTheme();
  const [sharedCategories, setSharedCategories] = useState([]);

  const getShared = async () => {
    await axios.get("/api/getSharedCategories").then((res) => {
      console.log(res.data);
      const categories = [];
      res.data.shares.map((share) => {
        share.category.shareId = share.id;
        categories.push(share.category);
      });
      setSharedCategories(categories);
      console.log(categories);
    });
  };

  useEffect(() => {
    getShared();
  }, []);

  return (
    <Container>
      <List>
        {sharedCategories !== [] &&
          sharedCategories.map((e) => {
            return <FeedItem category={e} />;
          })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: start;
  list-style: none;
`;
