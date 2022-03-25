import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "./components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";
import { LinkInterface } from "../../types/LinkInterface";
import { CollectionInterface } from "../../types/CollectionInterface";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { AddLinkWrapper } from "./style";

export const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [collections, setCollections] = useState<CollectionInterface[] | []>(
    []
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAdd = useCallback(async () => {
    await axios
      .post("/api/addLink", {
        title,
        url,
        collections,
      })
      .then((res) => {
        dispatch(addLink(res.data));
      });
    router.push("/");
  }, [title, url, collections]);

  return (
    <AddLinkWrapper>
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
        suggestions={collections}
        collections={collections}
      />
      <Button onClick={handleAdd}>add</Button>
    </AddLinkWrapper>
  );
};
