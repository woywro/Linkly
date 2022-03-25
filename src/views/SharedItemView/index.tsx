import { useTheme } from "styled-components";
import { Text } from "../../components/Text";
import { LinkInterface } from "../../types/LinkInterface";
import { SharedLink } from "./components/SharedLink";
import { List, SharedItemViewWrapper } from "./style";

interface Props {
  links: LinkInterface[];
}

export const SharedItemView = ({ share }) => {
  const theme = useTheme();

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
