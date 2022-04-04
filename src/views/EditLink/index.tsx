import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { updateLink } from "../../redux/actions/LinkActions";
import { RootState } from "../../redux/store";
import { CollectionInterface } from "../../types/CollectionInterface";
import { LinkInterface } from "../../types/LinkInterface";
import { CollectionsSelect } from "../../components/CollectionsSelect";
import { useRouter } from "next/router";
import { EditLinkWrapper } from "./style";

interface Props {
  link: LinkInterface;
}

export const EditLink = ({ link }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [collections, setCollections] = useState<CollectionInterface[] | []>(
    []
  );

  const router = useRouter();

  const dispatch = useDispatch();

  const allCollections = useSelector((state: RootState) => state.collections);

  useEffect(() => {
    setInputValues(link);
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
    await axios
      .post("/api/updateLink", {
        id: link.id,
        title: title,
        url: url,
        collections: collections,
      })
      .then((res) => {
        dispatch(updateLink(res.data));
      });
    router.back();
  };

  return (
    <EditLinkWrapper>
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
      <CollectionsSelect
        setCollections={setCollections}
        collections={collections}
      />
      <Button onClick={handleSaveLink}>save</Button>
    </EditLinkWrapper>
  );
};
