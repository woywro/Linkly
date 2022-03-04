import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "../Add/components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";
import { TagInterface } from "../../types/TagInterface";
import { LinkInterface } from "../../types/LinkInterface";
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

interface Props {
  item: LinkInterface;
}

export const EditLink = ({ item }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<TagInterface[] | []>([]);
  const [categories, setCategories] = useState<string[] | []>([]);
  const [keywords, setKeywords] = useState<string[] | []>([]);
  const router = useRouter();

  const Tags = useSelector((state) => state.tags);

  const setUserSavedTags = useCallback(() => {
    const choosenCategories: TagInterface[] = [];
    const choosenKeywords: TagInterface[] = [];
    categories.map((e) => {
      const category = {
        value: e,
        type: "category",
      };
      choosenCategories.push(category);
    });
    keywords.map((e) => {
      const keyword = {
        value: e,
        type: "keyword",
      };
      choosenKeywords.push(keyword);
    });
    const choosenTags: TagInterface[] =
      choosenCategories.concat(choosenKeywords);
    setTags(choosenTags);
  }, [categories, keywords]);

  const setInputValues = useCallback(() => {
    setTitle(item.title);
    setUrl(item.url);
    setCategories(item.categories);
    setKeywords(item.keywords);
  }, [item]);

  useEffect(() => {
    setUserSavedTags();
  }, [categories, keywords]);

  useEffect(() => {
    setInputValues();
  }, [item]);

  const handleSaveLink = useCallback(async () => {
    const categoriesFiltered: string[] = [];
    const keywordsFiltered: string[] = [];
    tags.map((e) => {
      if (e.type == "category") {
        categoriesFiltered.push(e.value);
      } else {
        keywordsFiltered.push(e.value);
      }
    });
    await axios.post("/api/updateLink", {
      id: item.id,
      categories: categoriesFiltered,
      keywords: keywordsFiltered,
    });
    router.push("/");
  }, [tags, item]);

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
      <Button onClick={handleSaveLink}>save</Button>
    </Container>
  );
};
