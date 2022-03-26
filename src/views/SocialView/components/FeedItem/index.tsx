import { useRouter } from "next/router";
import { RiFolder5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { Label, Name, FeedItemWrapper, Row, Timestamp } from "./style";
import moment from "moment";
import { SharedWithYouInterface } from "../../../../types/SharedWithYouInterface";

export const FeedItem = (share: SharedWithYouInterface) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <FeedItemWrapper
      onClick={() => {
        router.push({
          pathname: `/social/${share.id}`,
        });
      }}
    >
      <Label>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"70px"} />
        <Name>{share.collection.value}</Name>
      </Label>
      <Text color={theme.colors.secondaryText}>
        {share.collection.owner.email}
      </Text>
      <Timestamp color={theme.colors.secondaryText}>
        {moment(parseInt(share.createdTimestamp)).format("LT")}
      </Timestamp>
    </FeedItemWrapper>
  );
};
