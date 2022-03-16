import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  input: string;
  setInput: (arg0: string) => void;
}

export const AutoComplete = ({ input }: Props) => {
  const [hide, setHide] = useState<boolean>(true);
  const [suggestionsHeight, setSuggestionsHeight] = useState();
  const [finalSuggestions, setFinalSuggestions] = useState<Array<string>>([]);
  const [fetchedSuggestions, setFetchedSuggestions] = useState([]);
  const { height } = useWindowDimensions();

  const getSuggestions = () => {
    setFetchedSuggestions([
      { text: "dd" },
      { text: "aa" },
      { text: "aab" },
      { text: "aavb" },
      { text: "aafd" },
      { text: "aava" },
    ]);
  };

  const generateSuggestions = () => {
    const suggestions: string[] = fetchedSuggestions.filter((suggestion) => {
      return (
        suggestion.text
          .toLowerCase()
          .split(" ")
          .join(" ")
          .indexOf(input.toLowerCase().split(" ").join(" ")) > -1
      );
    });
    if (input.length > 0) {
      if (!fetchedSuggestions.includes(input)) {
        setHide(false);
      }
    } else {
      setHide(true);
    }
    let suggestionsQuantity = Math.floor((height * 0.2) / 40);
    setSuggestionsHeight(suggestionsQuantity * 40);
    setFinalSuggestions(suggestions.slice(0, suggestionsQuantity));
  };

  const handleOnClick = useCallback((e) => {
    setHide(true);
  }, []);

  useEffect(() => {
    getSuggestions();
  }, []);

  useEffect(() => {
    generateSuggestions();
  }, [height, input]);

  return (
    <>
      {hide == false && finalSuggestions.length > 0 && (
        <StyledSuggestions height={suggestionsHeight}>
          {finalSuggestions.map((suggestion) => {
            return (
              <Suggestion key={suggestion.text} onClick={handleOnClick}>
                {suggestion.text}
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
