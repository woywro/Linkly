import { useEffect, useState } from "react";
import styled from "styled-components";
import { setEmitFlags } from "typescript";

const StyledSuggestions = styled.ul`
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.colors.background};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  padding: 10px;
  position: relative;
  border-bottom: 1px solid black;
`;

const ChoosenList = styled.ul`
  display: flex;
  flex-flow: row;
`;

const ChoosenElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 12px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  margin: 2px;
`;

const StyledInput = styled.input`
  border: none;
  padding: 5px 10px;
  background: none;
`;

export const AutoComplete = ({ suggestions, setTags }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [ChoosenElements, setChoosenElements] = useState([]);

  useEffect(() => {
    setTags(ChoosenElements);
  }, [ChoosenElements]);

  const onChange = (e) => {
    const userInput = e.target.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleDeleteTag = (e) => {
    setChoosenElements(ChoosenElements.filter((x) => x !== e.target.innerText));
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setChoosenElements([...ChoosenElements, e.target.innerText]);
    setInput("");
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <StyledSuggestions>
        {filteredSuggestions.map((suggestion, index) => {
          return (
            <li key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </StyledSuggestions>
    ) : (
      <p>none</p>
    );
  };

  return (
    <Wrapper>
      <ChoosenList>
        {ChoosenElements.map((e) => {
          return <ChoosenElement onClick={handleDeleteTag}>{e}</ChoosenElement>;
        })}
      </ChoosenList>
      <StyledInput
        type="text"
        onChange={onChange}
        value={input}
        placeholder="enter tags"
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </Wrapper>
  );
};
