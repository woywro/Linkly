import Scrollbars from 'react-custom-scrollbars-2';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { EmptyState } from '../../components/EmptyState';
import { Text } from '../../components/Text';
import { LinkInterface } from '../../types/LinkInterface';
import { SharedWithYouInterface } from '../../types/SharedWithYouInterface';
import { ThemeInterface } from '../../types/ThemeInterface';
import { SharedLink } from './components/SharedLink';
import { List, SharedItemViewWrapper } from './style';

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
      <Scrollbars autoHeight>
        <List>
          {share.collection.links?.length == 0 ? (
            <EmptyState msg="This collection is empty" />
          ) : (
            share.collection.links?.map((link: LinkInterface) => {
              return <SharedLink link={link} key={link.id} />;
            })
          )}
        </List>
      </Scrollbars>
    </SharedItemViewWrapper>
  );
};
