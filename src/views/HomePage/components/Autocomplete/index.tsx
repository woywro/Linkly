import { useCallback, useEffect, useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { SuggestionInterface } from "../../../../types/SuggestionInterface";
import { SugestionsWrapper, Suggestion } from "./style";

interface Props {
  input: string;
  suggestions: SuggestionInterface[];
  setInput: (arg0: string) => void;
}

export const AutoComplete = ({ input, suggestions, setInput }: Props) => {
  const [hide, setHide] = useState<boolean>(true);
  const { height } = useWindowDimensions();

  const handleOnClick = useCallback((url) => {
    setHide(true);
    setInput("");
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [height, input, suggestions]);

  return (
    <>
      {hide == false && suggestions.length > 0 && (
        <SugestionsWrapper>
          {suggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion.url}
                onClick={() => handleOnClick(suggestion.url)}
              >
                {suggestion.title}
              </Suggestion>
            );
          })}
        </SugestionsWrapper>
      )}
    </>
  );
};
