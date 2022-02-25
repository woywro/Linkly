import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "../../components/Autocomplete";
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
  const [name, setName] = useState("");
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
        name: name,
        url: url,
        categories: categories,
        keywords: keywords,
      })
    );
    await axios.post("/api/addLink", {
      name,
      url,
      categories,
      keywords,
    });
    // console.log({
    //   name: name,
    //   url: url,
    //   tags: tags,
    //   categories: categories,
    //   keywords: keywords,
    // });
  };

  return (
    <Container>
      <Input
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <AutoComplete setTags={setTags} suggestions={Tags} />
      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
};
