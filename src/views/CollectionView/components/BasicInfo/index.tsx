import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { LinkInterface } from "../../../../types/LinkInterface";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/Button";
import axios from "axios";
import { deleteCollection, setLinks } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { setCollections } from "../../../../redux/actions";
import { CollectionShareLinks } from "../../../../types/CollectionShareLinks";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  width: 100%;
  height: 50%;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

interface Props {
  collection: CollectionShareLinks;
}

export const BasicInfo = ({ collection }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  const handleDeleteCategory = () => {
    // await axios
    //   .post("/api/deleteCollection", { id: collection.id })
    //   .then((res) => {
    //     dispatch(
    //       setCollections(collections.filter((e) => e.value !== res.data.value))
    //     );
    //   });
    dispatch(deleteCollection(collections, collection.id));
    router.push("/");
  };

  return (
    <Wrapper>
      <Name>
        <RiFolder5Fill size={"80px"} style={{ fill: theme.colors.secondary }} />
        <Text size={"big"} color={theme.colors.primaryText}>
          {collection.value}
        </Text>
      </Name>
      <Text size={"medium"} color={theme.colors.secondaryText}>
        links: {collection.links.length}
      </Text>
      <Button onClick={handleDeleteCategory}>Delete Category</Button>
    </Wrapper>
  );
};
