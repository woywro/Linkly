import axios from 'axios';
import { useDragControls } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiFillCloud } from 'react-icons/ai';
import { RiFolder5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { updateCollection } from '../../../../redux/actions/CollectionActions';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { CollectionWrapper, ColorTag, Icon, SharedIcon, Title } from './style';

interface Props {
  item: CollectionInterface;
  sortingMode: boolean;
}

export const Collection = ({ item, sortingMode }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const controls = useDragControls();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOpenCategory = useCallback(() => {
    axios
      .post('/api/updateCollectionTimestamp', { id: item.id })
      .then((res) => {
        dispatch(updateCollection(res.data));
      });
    router.push(`/collections/${item.id}`);
  }, [item]);

  return (
    <CollectionWrapper
      onClick={() => {
        if (sortingMode == false) {
          handleOpenCategory();
        }
      }}
      whileTap={{ scale: 0.9 }}
      value={item}
      sortingMode={sortingMode}
      dragListener={false}
      dragControls={controls}
      onPointerDown={(e) => {
        if (sortingMode == true) {
          controls.start(e);
        }
      }}
    >
      <Icon>
        {item?.shareRequests !== undefined && item.shareRequests.length > 0 && (
          <SharedIcon>
            <AiFillCloud
              size={'20px'}
              style={{ fill: theme.colors.primaryBg }}
            />
          </SharedIcon>
        )}
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={'60px'} />
        <ColorTag color={item.color} />
      </Icon>
      <Title>
        {item.value.length > 10 ? `${item.value.slice(0, 10)}...` : item.value}
      </Title>
    </CollectionWrapper>
  );
};
