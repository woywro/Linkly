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
  const [categories, setCategories] = useState<string[] | []>([]);
  const [keywords, setKeywords] = useState<string[] | []>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const Tags = useSelector((state) => state.tags);

  useEffect(() => {
    tags.map((e) => {
      if (e.type == "category") {
        setCategories([...categories, e.value]);
      } else {
        setKeywords([...keywords, e.value]);
      }
    });
  }, [tags]);

  const handleAdd = useCallback(async () => {
    const newLink: LinkInterface = {
      title: title,
      url: url,
      categories: categories,
      keywords: keywords,
    };
    dispatch(addLink(newLink));
    await axios.post("/api/addLink", {
      title,
      url,
      categories,
      keywords,
    });
    router.push("/");
  }, [title, url, keywords, categories]);

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
