import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../../components/Text";
import { RootState } from "../../../../redux/store";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import {
  Add,
  ChoosenSuggestion,
  ChoosenSuggestionList,
  StyledInput,
  SuggesionsWrapper,
  Suggestion,
  TypeChoice,
  AutocompleteWrapper,
} from "./style";

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
  const savedCollections = useSelector((state: RootState) => state.collections);

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
      <SuggesionsWrapper>
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
      </SuggesionsWrapper>
    ) : (
      <Add>
        <TypeChoice onClick={() => handleAddCollection()}>
          Collection +
        </TypeChoice>
      </Add>
    );
  };

  return (
    <AutocompleteWrapper>
      <ChoosenSuggestionList>
        {collections !== undefined &&
          collections.map((e) => {
            return (
              <ChoosenSuggestion onClick={() => handleDeleteCollection(e)}>
                {e.value}
              </ChoosenSuggestion>
            );
          })}
      </ChoosenSuggestionList>
      <StyledInput
        type="text"
        onChange={onChange}
        value={input}
        placeholder="enter collections"
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </AutocompleteWrapper>
  );
};
