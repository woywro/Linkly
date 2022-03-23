import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AutoComplete } from "../Autocomplete";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { SuggestionInterface } from "../../../../types/SuggestionInterface";
import breakpoints from "../../../../theme/breakpoints";

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
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    background-image: ${(props) => props.theme.colors.gradient};
    padding: 0;
    margin: 0;
    width: 100%;
    height: 120px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

export const StyledSearchBar = styled.div`
  width: 60%;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  @media only screen and ${breakpoints.device.sm} {
    width: 90%;
  }
`;

export const Divider = styled.div`
  height: 36px;
  width: 2px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 5px;
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
