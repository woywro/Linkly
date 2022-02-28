import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "./components/Autocomplete";
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

export const Add = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.tags);

  useEffect(() => {
    tags.map((e) => {
      if (e.type == "category") {
        setCategories([...categories, e.name]);
      } else {
        setKeywords([...keywords, e.name]);
      }
    });
  }, [tags]);

  const handleAdd = async () => {
    dispatch(
      addLink({
        title: title,
        url: url,
        categories: categories,
        keywords: keywords,
      })
    );
    await axios.post("/api/addLink", {
      title,
      url,
      categories,
      keywords,
    });
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
      <AutoComplete setTags={setTags} suggestions={Tags} />
      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
};
