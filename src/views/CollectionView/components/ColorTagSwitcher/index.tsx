import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { colorTags } from '../../../../constants/colorTags';
import { updateCollection } from '../../../../redux/actions/CollectionActions';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { ColorSwitcherWrapper, ColorTag } from './style';

interface Props {
  setCollection: (arg0: CollectionInterface) => void;
}

export const ColorTagSwitcher = ({ setCollection }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChangeTag = (color: string) => {
    axios
      .post('/api/updateCollectionTag', {
        id: router.query.collectionId,
        color: color,
      })
      .then((res) => {
        dispatch(updateCollection(res.data));
        setCollection(res.data);
      });
  };

  return (
    <ColorSwitcherWrapper>
      {colorTags.map((e) => {
        return (
          <ColorTag
            key={e}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChangeTag(e)}
            background={e}
          />
        );
      })}
    </ColorSwitcherWrapper>
  );
};
