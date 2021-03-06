import React, { useCallback } from 'react';
import { LinkInterface } from '../../../../types/LinkInterface';
import { Text } from '../../../../components/Text';
import { Wrapper, StyledCheckbox } from './style';

interface Props {
  link: LinkInterface;
  checked: string[];
  setChecked: (arg0: string[]) => void;
}
export const ExportElement = ({ link, checked, setChecked }: Props) => {
  const handleCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      var updatedList: string[] = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    },
    [checked]
  );

  return (
    <Wrapper>
      <StyledCheckbox
        value={link.url}
        checked={checked.includes(link.url)}
        type="checkbox"
        onChange={handleCheck}
      />
      <Text>{link.url.slice(0, 40)}...</Text>
    </Wrapper>
  );
};
