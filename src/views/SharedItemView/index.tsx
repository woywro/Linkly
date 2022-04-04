import Scrollbars from "react-custom-scrollbars-2";
import { useTheme } from "styled-components";
import { Text } from "../../components/Text";
import { LinkInterface } from "../../types/LinkInterface";
import { SharedWithYouInterface } from "../../types/SharedWithYouInterface";
import { ThemeInterface } from "../../types/ThemeInterface";
import { SharedLink } from "./components/SharedLink";
import { List, SharedItemViewWrapper } from "./style";

interface Props {
  share: SharedWithYouInterface;
}

export const SharedItemView = ({ share }: Props) => {
  const theme = useTheme() as ThemeInterface;

  return (
    <SharedItemViewWrapper>
      <Text color={theme.colors.secondary}>
        {share.collection.owner?.email}
      </Text>
      <Scrollbars
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List>
          {share.collection.links?.map((link: LinkInterface) => {
            return <SharedLink link={link} />;
          })}
        </List>
      </Scrollbars>
    </SharedItemViewWrapper>
  );
};
