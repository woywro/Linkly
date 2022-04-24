import { link } from 'fs';
import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import { LinkInterface } from '../../../../types/LinkInterface';
import {
  hoverEffectBg,
  hoverEffectText,
} from '../../../../mixins/hoverEffects';

interface Props {
  link: LinkInterface;
}

export const Link = ({ link }: Props) => {
  return (
    <Wrapper onClick={() => window.open(link?.url, '_blank')}>
      <Text>{link.title}</Text>
    </Wrapper>
  );
};
const Wrapper = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    ${hoverEffectBg}
  }
`;
