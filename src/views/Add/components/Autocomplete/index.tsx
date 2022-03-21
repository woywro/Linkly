import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { CollectionInterface } from "../../../../types/CollectionInterface";

interface Props {
  suggestions: CollectionInterface[];
  setCollections: (arg0: CollectionInterface[]) => void;
  collections: CollectionInterface[];
}

export const AutoComplete = ({
  suggestions,
  setCollections,
  collections,
}: Props) => {
  const savedCollections = useSelector((state) => state.collections);

  const [filteredSuggestions, setFilteredSuggestions] = useState<
    CollectionInterface[] | []
  >([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const onChange = (e: { target: HTMLInputElement }) => {
    const userInput = e.target.value;
    const unLinked = savedCollections.filter(
      (suggestion) =>
        suggestion.value.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setShowSuggestions(true);
  };

  const handleDeleteCollection = (e) => {
    setCollections(
      JSON.parse(JSON.stringify(collections)).filter((x) => x.value !== e.value)
    );
  };

  const handleAddSuggestion = (e: CollectionInterface) => {
    if (!collections.map((e) => e.value).includes(e.value)) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setCollections([...collections, { value: e.value }]);
      setInput("");
    }
  };

  const handleAddCollection = async () => {
    setShowSuggestions(false);
    setCollections([...collections, { value: input }]);
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
            </Suggestion>
          );
        })}
      </StyledSuggestions>
    ) : (
      <Add>
        <TypeChoice onClick={() => handleAddCollection()}>
          Collection +
        </TypeChoice>
      </Add>
    );
  };

  return (
    <Wrapper>
      <ChoosenList>
        {collections !== undefined &&
          collections.map((e) => {
            return (
              <ChoosenElement onClick={() => handleDeleteCollection(e)}>
                {e.value}
              </ChoosenElement>
            );
          })}
      </ChoosenList>
      <StyledInput
        type="text"
        onChange={onChange}
        value={input}
        placeholder="enter collections"
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
  flex-flow: column;
  justify-content: center;
`;

const TypeChoice = styled(Text)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;
