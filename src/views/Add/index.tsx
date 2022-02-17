import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AutoComplete } from "../../components/Autocomplete";

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
    <div>
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
        tags={tags}
        setTags={setTags}
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};
