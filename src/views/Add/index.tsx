import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "./components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";
import { LinkInterface } from "../../types/LinkInterface";
import { TagInterface } from "../../types/TagInterface";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { setTags } from "../../redux/actions";

const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
`;

export const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [tags, setTags] = useState<TagInterface[] | []>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const Tags = useSelector((state) => state.tags);

  const handleAdd = useCallback(async () => {
    console.log(tags);
    await axios
      .post("/api/addLink", {
        title,
        url,
        tags,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(addLink(res.data));
        // dispatch(setTags([...Tags, {}]))
      });
    router.push("/");
  }, [title, url, tags]);

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
      <AutoComplete setTags={setTags} suggestions={Tags} tags={tags} />
      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
};
