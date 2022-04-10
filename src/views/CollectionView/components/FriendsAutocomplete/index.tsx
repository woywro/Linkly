import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Text } from "../../../../components/Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { SugestionsWrapper, Suggestion } from "./style";

interface Props {
  friend: string;
  friends: String[];
  setFieldValue: any;
}

export const FriendsAutocomplete = ({
  friend,
  friends,
  setFieldValue,
}: Props) => {
  const [hide, setHide] = useState<boolean>(true);
  const { height } = useWindowDimensions();

  const handleOnClick = useCallback(
    (friend) => {
      setHide(true);
      setFieldValue("email", friend);
    },
    [friend, hide]
  );

  useEffect(() => {
    if (friend.length > 0) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [height, friend, friends]);

  return (
    hide == false &&
    friends.length > 0 && (
      <SugestionsWrapper>
        {friends.map((friend) => {
          return (
            <Suggestion onClick={() => handleOnClick(friend)}>
              <Text style={{ marginLeft: "4px", wordBreak: "break-all" }}>
                {friend}
              </Text>
            </Suggestion>
          );
        })}
      </SugestionsWrapper>
    )
  );
};
