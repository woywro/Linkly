import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { CollectionsSelect } from "../../components/CollectionsSelect";
import { Input } from "../../components/Input";
import { updateCollections } from "../../redux/actions/CollectionActions";
import { addLink, updateLink } from "../../redux/actions/LinkActions";
import { CollectionInterface } from "../../types/CollectionInterface";
import { LinkInterface } from "../../types/LinkInterface";
import { EditLinkWrapper } from "./style";

interface Props {
  link?: LinkInterface;
}

export const LinkModal = ({ link }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [collections, setCollections] = useState<CollectionInterface[] | []>(
    []
  );

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (link !== undefined) {
      setInputValues(link);
    }
  }, [link]);

  const setInputValues = useCallback(
    (link) => {
      setTitle(link.title);
      setUrl(link.url);
      setCollections(link.collections);
    },
    [link, collections]
  );

  const handleSaveLinkOnEdit = async () => {
    await axios
      .post("/api/updateLink", {
        id: link?.id,
        title: title,
        url: url,
        collections: collections,
      })
      .then((res) => {
        dispatch(updateLink(res.data));
        dispatch(updateCollections(res.data.collections));
      });
    router.back();
  };

  const handleAdd = async () => {
    await axios
      .post("/api/addLink", {
        title,
        url,
        collections,
      })
      .then((res) => {
        dispatch(addLink(res.data));
        dispatch(updateCollections(res.data.collections));
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
      {router.pathname !== "/addLink" ? (
        <Button onClick={handleSaveLinkOnEdit}>save</Button>
      ) : (
        <Button onClick={handleAdd}>add</Button>
      )}
    </EditLinkWrapper>
  );
};
