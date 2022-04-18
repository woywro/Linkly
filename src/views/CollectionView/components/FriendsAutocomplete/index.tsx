import { useCallback, useEffect, useState } from "react";
import { Text } from "../../../../components/Text";
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
  }, [friend]);

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
