import { useRouter } from "next/router";
import { RiFolder5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { Label, Name, FeedItemWrapper, Row, Timestamp } from "./style";
import moment from "moment";
import { SharedWithYouInterface } from "../../../../types/SharedWithYouInterface";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { UserInterface } from "../../../../types/UserInterface";
import { ThemeInterface } from "../../../../types/ThemeInterface";

interface Props {
  sharedItem: SharedWithYouInterface;
}

export const FeedItem = ({ sharedItem }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const router = useRouter();

  return (
    <FeedItemWrapper
      onClick={() => {
        router.push({
          pathname: `/social/${sharedItem.id}`,
        });
      }}
    >
      <Label>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"70px"} />
        <Name>{sharedItem.collection.value}</Name>
      </Label>
      <Text color={theme.colors.secondaryText}>
        {sharedItem.collection.owner?.email}
      </Text>
      <Timestamp color={theme.colors.secondaryText}>
        {moment(parseInt(sharedItem.createdTimestamp)).fromNow()}
      </Timestamp>
    </FeedItemWrapper>
  );
};
