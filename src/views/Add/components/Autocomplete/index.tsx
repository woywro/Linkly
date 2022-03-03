import { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { useDispatch } from "react-redux";
import { updateTags } from "../../../../redux/actions";
import axios from "axios";
import { TagInterface } from "../../../../types/TagInterface";

interface Props {
  suggestions: TagInterface[];
  setTags: (arg0: TagInterface[]) => void;
  tags: TagInterface[];
}

export const AutoComplete = ({ suggestions, setTags, tags }: Props) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    TagInterface[] | []
  >([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [ChoosenElements, setChoosenElements] = useState<TagInterface[] | []>(
    []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setChoosenElements(tags);
  }, [tags]);

  const onChange = (e: { target: HTMLInputElement }) => {
    const userInput = e.target.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.value.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setShowSuggestions(true);
  };

  const handleDeleteTag = async (e) => {
    setChoosenElements(ChoosenElements.filter((x) => x.value !== e.value));
    console.log(e.value);
    setTags(ChoosenElements.filter((x) => x.value !== e.value));
  };

  const handleAddSuggestion = (e: TagInterface) => {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setChoosenElements([...ChoosenElements, { value: e.value, type: e.type }]);
    setTags([...ChoosenElements, { value: e.value, type: e.type }]);
    setInput("");
  };

  const handleAddTag = async (e) => {
    setShowSuggestions(false);
    dispatch(
      updateTags({
        value: e.target.innerText,
        type: "category",
      })
    );
    await axios.post("/api/addTag", {
      value: e.target.innerText,
      type: "category",
    });
    setChoosenElements([
      ...ChoosenElements,
      { value: e.target.innerText, type: "category" },
    ]);
    setTags([
      ...ChoosenElements,
      { value: e.target.innerText, type: "category" },
    ]);
    setInput("");
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <StyledSuggestions>
        {filteredSuggestions.map((suggestion) => {
          return (
            <Suggestion
              key={suggestion.value}
              onClick={() => handleAddSuggestion(suggestion)}
            >
              <Text size={"small"} bold>
                {suggestion.value}
              </Text>
              <Text size={"small"}>{suggestion.type}</Text>
            </Suggestion>
          );
        })}
      </StyledSuggestions>
    ) : (
      <Add onClick={handleAddTag}>
        <Text bold>{input}</Text>
      </Add>
    );
  };

  return (
    <Wrapper>
      <ChoosenList>
        {ChoosenElements.map((e) => {
          return (
            <ChoosenElement onClick={() => handleDeleteTag(e)}>
              {e.value}
            </ChoosenElement>
          );
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

const StyledSuggestions = styled.ul`
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${(props) => props.theme.colors.secondary};
`;
const Wrapper = styled.div`
  border: none;
  position: relative;
  background: #e2e7f3;
  padding: 10px;
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
  background: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  border-radius: 20px;
  margin: 2px;
`;

const StyledInput = styled.input`
  border: none;
  background: none;
  position: relative;
`;

const Suggestion = styled.li`
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
`;

const Add = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.background};
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
