import { useDragControls } from 'framer-motion';
import { useRouter } from 'next/router';
import { AiFillCloud } from 'react-icons/ai';
import { RiFolder5Fill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { ShareRequestInterface } from '../../../../types/ShareRequestInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { CollectionWrapper, Icon, SharedIcon, Title } from './style';
import { updateCollection } from '../../../../redux/actions/CollectionActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import styled from 'styled-components';

interface Props {
  item: CollectionInterface;
  sortingMode: boolean;
}

export const Collection = ({ item, sortingMode }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const controls = useDragControls();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOpenCategory = () => {
    axios
      .post('/api/updateCollectionTimestamp', { id: item.id })
      .then((res) => {
        dispatch(updateCollection(res.data));
      });
    router.push(`/collections/${item.id}`);
  };

  return (
    <CollectionWrapper
      onClick={() => {
        if (sortingMode == false) {
          handleOpenCategory();
        }
      }}
      whileTap={{ scale: 0.9 }}
      value={item}
      dragListener={false}
      dragControls={controls}
      onPointerDown={(e) => {
        if (sortingMode == true) {
          controls.start(e);
        }
      }}
    >
      <Icon>
        {item.isShared == true && (
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
      <Title>{item.value}</Title>
    </CollectionWrapper>
  );
};

const ColorTag = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  background: ${(props) => props.color};
`;
