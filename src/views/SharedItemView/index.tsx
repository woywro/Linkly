import { useEffect } from "react";
import { useTheme } from "styled-components";
import { Text } from "../../components/Text";
import { LinkInterface } from "../../types/LinkInterface";
import { SharedWithYouInterface } from "../../types/SharedWithYouInterface";
import { SharedLink } from "./components/SharedLink";
import { List, SharedItemViewWrapper } from "./style";

interface Props {
  share: SharedWithYouInterface[];
}

export const SharedItemView = ({ share }: Props) => {
  const theme = useTheme();

  useEffect(() => {
    console.log(share);
  }, [share]);

  return (
    <SharedItemViewWrapper>
      <Text color={theme.colors.secondary}>{share.collection.owner.email}</Text>
      <List>
        {share.collection.links.map((link) => {
          return <SharedLink link={link} />;
        })}
      </List>
    </SharedItemViewWrapper>
  );
};
