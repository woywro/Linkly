import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AutoComplete } from "../../components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

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

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addLink({ name: name, url: url, tags: tags }));
    console.log(tags);
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
      <AutoComplete
        setTags={setTags}
        suggestions={[
          { name: "social media", type: "category" },
          { name: "video", type: "category" },
          { name: "school", type: "category" },
          { name: "facebook", type: "tag" },
          { name: "youtube", type: "tag" },
          { name: "work", type: "category" },
        ]}
      />
      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
};
