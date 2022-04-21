import { useRouter } from 'next/router';
import { RiFolder5Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import { deleteCollection } from '../../../../redux/actions/CollectionActions';
import { RootState } from '../../../../redux/store';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { Name, CollectionInfoWrapper, Icon, ColorTag } from './style';
import moment from 'moment';
import { useCallback } from 'react';
import { ColorTagSwitcher } from '../ColorTagSwitcher';

interface Props {
  collection: CollectionInterface;
  setCollection: (arg0: CollectionInterface) => void;
}

export const CollectionInfo = ({ collection, setCollection }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const router = useRouter();
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);

  const handleDeleteCategory = useCallback(() => {
    dispatch(deleteCollection(collections, collection.id));
    router.push('/');
  }, [collections, collection]);

  return (
    <CollectionInfoWrapper>
      <Name>
        <Icon>
          <RiFolder5Fill size={'80px'} style={{ fill: theme.colors.yellow }} />
          <ColorTag background={collection.color} />
        </Icon>
        <Text size={'big'} color={theme.colors.primaryText}>
          {collection.value}
        </Text>
      </Name>
      <Text size={'medium'} color={theme.colors.secondaryText}>
        links: {collection.links?.length}
      </Text>
      <ColorTagSwitcher setCollection={setCollection} />
      <Button onClick={handleDeleteCategory}>Delete Category</Button>
    </CollectionInfoWrapper>
  );
};
