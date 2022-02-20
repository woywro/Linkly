import { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { useDispatch } from "react-redux";
import { updateTags } from "../../redux/actions";

const StyledSuggestions = styled.ul`
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.colors.background};
`;
const Wrapper = styled.div`
  border: none;
  position: relative;
  background: #e2e7f3;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
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

const Suggestion = styled.li`
  cursor: pointer;
  padding: 5px;
`;

const Add = styled.div`
  cursor: pointer;
  background: red;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AutoComplete = ({ suggestions, setTags }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [ChoosenElements, setChoosenElements] = useState([]);
  const dispatch = useDispatch();

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

  const handleAddTag = (e) => {
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setChoosenElements([...ChoosenElements, e.target.innerText]);
    dispatch(updateTags(e.target.innerText));
    setInput("");
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <StyledSuggestions>
        {filteredSuggestions.map((suggestion) => {
          return (
            <Suggestion key={suggestion} onClick={onClick}>
              {suggestion}
            </Suggestion>
          );
        })}
      </StyledSuggestions>
    ) : (
      <Add onClick={handleAddTag}>
        <Text>{input}</Text>
        <Text bold>+</Text>
      </Add>
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
