import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AutoComplete } from "../../components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { ColorChoice } from "./components/ColorChoice";
import { useSelector } from "react-redux";
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
  const [tags, setTags] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.tags);

  const handleAdd = async () => {
    dispatch(addLink({ name: name, url: url, tags: tags, color: color }));
    await axios.post("/api/addLink", {
      name,
      url,
    });
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
      <ColorChoice setColor={setColor} color={color} />
      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
};
