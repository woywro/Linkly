import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import axios from "axios";
import { SuggestionInterface } from "../../../../types/SuggestionInterface";

interface Props {
  input: string;
  suggestions: SuggestionInterface[];
  setInput: (arg0: string) => void;
}

export const AutoComplete = ({ input, suggestions, setInput }: Props) => {
  const [hide, setHide] = useState<boolean>(true);
  const [suggestionsHeight, setSuggestionsHeight] = useState(0);
  const [finalSuggestions, setFinalSuggestions] = useState<
    Array<SuggestionInterface>
  >([]);
  const { height } = useWindowDimensions();

  const generateSuggestions = () => {
    if (input.length > 0) {
      setHide(false);
    } else {
      setHide(true);
    }
    let suggestionsQuantity = Math.floor((height * 0.2) / 40);
    setSuggestionsHeight(suggestionsQuantity * 40);
    setFinalSuggestions(suggestions.slice(0, suggestionsQuantity));
  };

  const handleOnClick = useCallback((url) => {
    setHide(true);
    setInput("");
    window.open(url, "_blank");
  }, []);

  useEffect(() => {
    generateSuggestions();
  }, [height, input, suggestions]);

  return (
    <>
      {hide == false && finalSuggestions.length > 0 && (
        <StyledSuggestions height={suggestionsHeight}>
          {finalSuggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion.url}
                onClick={() => handleOnClick(suggestion.url)}
              >
                {suggestion.title}
              </Suggestion>
            );
          })}
        </StyledSuggestions>
      )}
    </>
  );
};

export const StyledSuggestions = styled.ul<{ height: number }>`
  width: 60%;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 16px;
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  position: absolute;
  color: black;
  top: 100%;
  margin: 0;
  height: ${(props) => props.height}px;
  overflow-y: scroll;
  left: 0;
  z-index: 10;
`;

export const Suggestion = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  margin: 0;
`;
