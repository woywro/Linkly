import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AutoComplete } from "../Autocomplete";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { SuggestionInterface } from "../../types/SuggestionInterface";

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
      });
  };

  return (
    <StyledSearchBar>
      <AiOutlineSearch />
      <Input placeholder="wpisz frazę" onChange={handleChange} value={input} />
      {typeof window !== "undefined" && (
        <AutoComplete
          input={input}
          setInput={setInput}
          suggestions={suggestions}
        />
      )}
    </StyledSearchBar>
  );
};

export const StyledSearchBar = styled.div`
  width: 60%;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
`;

export const Divider = styled.div`
  height: 36px;
  width: 2px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 20px 5px;
  background: white;
  margin-left: 10px;
  color: black;
  font-size: 14px;
  line-height: 21px;
  transition: all 0.3s ease;
  border-radius: 16px;
  &:focus {
    outline: none;
    transform: scale(1.02);
  }
`;
