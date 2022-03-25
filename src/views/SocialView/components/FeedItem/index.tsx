import { useRouter } from "next/router";
import { RiFolder5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { Label, Name, FeedItemWrapper } from "./style";

interface Props {
  item: LinkInterface;
}

export const FeedItem = ({ collection }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <FeedItemWrapper
      onClick={() => {
        router.push({
          pathname: `/social/${collection.shareId}`,
        });
      }}
    >
      <Label>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"60px"} />
        <Name>{collection.value}</Name>
      </Label>
      <Text color={theme.colors.secondaryText}>{collection.owner.email}</Text>
      <Text color={theme.colors.secondaryText}>{collection.links.length}</Text>
    </FeedItemWrapper>
  );
};
