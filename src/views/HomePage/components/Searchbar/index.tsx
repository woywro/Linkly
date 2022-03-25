import axios from "axios";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SuggestionInterface } from "../../../../types/SuggestionInterface";
import { AutoComplete } from "../Autocomplete";
import { Input, StyledSearchBar, SearchBarWrapper } from "./style";

export const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SuggestionInterface[]>([]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setInput(e.target.value);
    axios
      .get("/api/find", {
        params: {
          search: e.target.value,
        },
      })
      .then((res) => {
        setSuggestions(res.data.links);
        console.log(res.data.links)
      });
  };

  return (
    <SearchBarWrapper>
      <StyledSearchBar>
        <AiOutlineSearch />
        <Input
          placeholder="search by name or keyword"
          onChange={handleChange}
          value={input}
        />
        {/* {typeof window !== "undefined" && (
          <AutoComplete
            input={input}
            setInput={setInput}
            suggestions={suggestions}
          />
        )} */}
      </StyledSearchBar>
    </SearchBarWrapper>
  );
};
