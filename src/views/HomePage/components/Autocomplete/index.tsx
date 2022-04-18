import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { AiOutlineLink } from "react-icons/ai";
import { RiFolder5Fill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { SuggestionInterface } from "../../../../types/SuggestionInterface";
import { SugestionsWrapper, Suggestion } from "./style";

interface Props {
  input: string;
  suggestions: SuggestionInterface[];
  setInput: (arg0: string) => void;
}

export const AutoComplete = ({ input, suggestions, setInput }: Props) => {
  const [hide, setHide] = useState<boolean>(true);
  const router = useRouter();

  const handleOnClick = useCallback((suggestion) => {
    setHide(true);
    setInput("");
    if (suggestion.type === "link") {
      window.open(suggestion.url, "_blank");
    } else if (suggestion.type === "collection") {
      router.push(`/collections/${suggestion.id}`);
    }
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [input, suggestions]);

  return (
    <>
      {hide == false && suggestions.length > 0 && (
        <SugestionsWrapper>
          <Scrollbars autoHeight>
            {suggestions.map((suggestion) => {
              return (
                <Suggestion
                  key={suggestion.id}
                  onClick={() => handleOnClick(suggestion)}
                >
                  {suggestion.type == "collection" ? (
                    <RiFolder5Fill />
                  ) : (
                    <AiOutlineLink />
                  )}
                  <Text style={{ marginLeft: "4px", wordBreak: "break-all" }}>
                    {suggestion.value}
                  </Text>
                </Suggestion>
              );
            })}
          </Scrollbars>
        </SugestionsWrapper>
      )}
    </>
  );
};
