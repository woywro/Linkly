import { useEffect, useMemo, useState } from 'react';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { colorTags } from '../../../../constants/colorTags';
import { Row } from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setCollections } from '../../../../redux/actions/CollectionActions';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { theme1 } from '../../../../theme/theme';
import { ThemeInterface } from '../../../../types/ThemeInterface';

interface Props {
  setList: (arg0: CollectionInterface[]) => void;
  list: CollectionInterface[];
}

export const ColorTagDropdown = ({ setList, list }: Props) => {
  const mediaQuerySm = useMediaQuery('sm');
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
          return <ColorTag onClick={() => handleFilter(e)} color={e} />;
        })}
        <ColorTag color={theme.colors.gradient} onClick={handleResetFilter} />
      </Row>
    </DropdownMenu>
  );
};

const ColorTag = styled.div<{ color: string }>`
  padding: 10px;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  background: ${(props) => props.color};
  cursor: pointer;
  border-radius: 20px;
`;
