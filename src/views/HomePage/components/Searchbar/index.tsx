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
    handleSearch(e.target.value);
  };

  const handleSearch = (toSearch: string) => {
    setSuggestions([]);
    axios
      .get("/api/find", {
        params: {
          search: toSearch,
        },
      })
      .then((res) => {
        const allSuggestions = res.data.links.concat(res.data.collections);
        const normalizedSuggestions: SuggestionInterface[] = allSuggestions.map(
          (e: SuggestionInterface) => {
            if (e.title == undefined) {
              return {
                id: e.id,
                value: e.value,
                type: "collection",
              };
            } else {
              return {
                id: e.id,
                value: e.title,
                type: "link",
              };
            }
          }
        );
        if (allSuggestions.length > 0) {
          setSuggestions(normalizedSuggestions);
        }
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
        {typeof window !== "undefined" && (
          <AutoComplete
            input={input}
            setInput={setInput}
            suggestions={suggestions}
          />
        )}
      </StyledSearchBar>
    </SearchBarWrapper>
  );
};
