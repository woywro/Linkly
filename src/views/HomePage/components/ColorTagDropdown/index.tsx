import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { colorTags } from '../../../../constants/colorTags';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { RootState } from '../../../../redux/store';
import breakpoints from '../../../../theme/breakpoints';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { ThemeInterface } from '../../../../types/ThemeInterface';
import { Row } from '../../../style';
import { ColorTag } from './style';

interface Props {
  setList: (arg0: CollectionInterface[]) => void;
}

export const ColorTagDropdown = ({ setList }: Props) => {
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);
  const collections = useSelector((state: RootState) => state.collections);
  const dispatch = useDispatch();
  const theme = useTheme() as ThemeInterface;
  const [elementToReturn, setElementToReturn] = useState<JSX.Element>(
    <ColorTag color={theme.colors.gradient} />
  );

  useEffect(() => {
    setElementToReturn(<ColorTag color={theme.colors.gradient} />);
  }, [theme]);

  const handleFilter = (color: string) => {
    setElementToReturn(<ColorTag color={color} />);
    const collectionsFiltered: CollectionInterface[] = collections.filter(
      (col) => {
        return col.color == color;
      }
    );
    const collectionsSorted: CollectionInterface[] = collectionsFiltered.sort(
      (a: CollectionInterface, b: CollectionInterface) =>
        parseInt(b.modificationTimestamp) - parseInt(a.modificationTimestamp)
    );
    setList(collectionsSorted);
  };

  const handleResetFilter = () => {
    setElementToReturn(<ColorTag color={theme.colors.gradient} />);
    setList(
      collections.sort(
        (a: CollectionInterface, b: CollectionInterface) =>
          parseInt(b.modificationTimestamp) - parseInt(a.modificationTimestamp)
      )
    );
  };

  return (
    <DropdownMenu
      icon={true}
      fullWidth={mediaQuerySm ? true : false}
      returnedElement={elementToReturn}
    >
      <Row>
        {colorTags.map((e) => {
          return <ColorTag key={e} onClick={() => handleFilter(e)} color={e} />;
        })}
        <ColorTag
          color={theme.colors.gradient}
          style={{
            marginLeft: '10px',
          }}
          onClick={handleResetFilter}
        />
      </Row>
    </DropdownMenu>
  );
};
