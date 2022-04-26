import React from 'react';
import { LinkInterface } from '../../../../types/LinkInterface';
import styled from 'styled-components';
import { Text } from '../../../../components/Text';

interface Props {
  link: LinkInterface;
  checked: string[];
  setChecked: (arg0: string[]) => void;
}
export const ExportElement = ({ link, checked, setChecked }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    var updatedList: string[] = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

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

const StyledCheckbox = styled.input`
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
`;
