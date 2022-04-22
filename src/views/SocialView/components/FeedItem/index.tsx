import moment from 'moment';
import { useRouter } from 'next/router';
import { RiFolder5Fill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Text } from '../../../../components/Text';
import { SharedWithYouInterface } from '../../../../types/SharedWithYouInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { FeedItemWrapper, Label, Name, Timestamp } from './style';

interface Props {
  sharedItem: SharedWithYouInterface;
}

export const FeedItem = ({ sharedItem }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const router = useRouter();

  return (
    <FeedItemWrapper
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        router.push({
          pathname: `/social/${sharedItem.id}`,
        });
      }}
    >
      <Label>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={'70px'} />
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
