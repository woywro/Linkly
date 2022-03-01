import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "../Add/components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";

const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
`;

export const EditLink = ({ item }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.tags);

  // useEffect(() => {
  //   tags.map((e) => {
  //     if (e.type == "category") {
  //       setCategories([...categories, e.name]);
  //     } else {
  //       setKeywords([...keywords, e.name]);
  //     }
  //   });
  // }, [tags]);

  useEffect(() => {
    const choosenCategories = [];
    const choosenKeywords = [];
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
    setTags(choosenCategories.concat(choosenKeywords));
    console.log(choosenKeywords.concat(choosenCategories));
  }, [categories, keywords]);

  useEffect(() => {
    setTitle(item.title);
    setUrl(item.url);
    setCategories(item.categories);
    setKeywords(item.keywords);
  }, [item]);

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
    </Container>
  );
};
