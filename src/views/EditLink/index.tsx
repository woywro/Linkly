import { Input } from "../../components/Input";
import { addLink, setLinks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "../Add/components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";
import { CollectionInterface } from "../../types/CollectionInterface";
import { LinkInterface } from "../../types/LinkInterface";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { updateLink } from "../../redux/actions";

const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  link: LinkInterface;
}

export const EditLink = ({ link }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [collections, setCollections] = useState<CollectionInterface[] | []>(
    []
  );

  const dispatch = useDispatch();

  const allCollections = useSelector((state) => state.collections);

  useEffect(() => {
    setInputValues(JSON.parse(link));
  }, [link]);

  const setInputValues = useCallback(
    (link) => {
      setTitle(link.title);
      setUrl(link.url);
      setCollections(link.collections);
    },
    [link]
  );

  const handleSaveLink = async () => {
    console.log(collections);
    await axios
      .post("/api/updateLink", {
        id: JSON.parse(link).id,
        title: title,
        url: url,
        collections: collections,
      })
      .then((res) => {
        dispatch(updateLink(res.data));
      });
    // router.push("/");
  };

  return (
    <Container>
      <Input
        placeholder="name"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <Input
        placeholder="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        value={url}
      />
      <AutoComplete
        setCollections={setCollections}
        suggestions={allCollections}
        collections={collections}
      />
      <Button onClick={handleSaveLink}>save</Button>
    </Container>
  );
};
