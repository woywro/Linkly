import styled from 'styled-components';
<<<<<<< HEAD:src/views/CollectionView/components/LinkItem/style.ts
<<<<<<< HEAD:src/views/CollectionView/components/LinkItem/style.ts
import {
  hoverEffectBg,
  hoverEffectText,
} from '../../../../mixins/hoverEffects';
import { Text } from '../../../../components/Text';
import breakpoints from '../../../../theme/breakpoints';
import { motion } from 'framer-motion';
=======
import { hoverEffectBg, hoverEffectText } from '../../mixins/hoverEffects';
import breakpoints from '../../theme/breakpoints';
import { Text } from '../Text';
>>>>>>> development:src/components/LinkItem/style.ts
=======
import { hoverEffectBg, hoverEffectText } from '../../mixins/hoverEffects';
import breakpoints from '../../theme/breakpoints';
import { Text } from '../Text';
>>>>>>> development:src/components/LinkItem/style.ts

export const LinkWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  gap: 10px;
  &:hover {
    ${hoverEffectBg}
  }
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and ${breakpoints.device.lg} {
    gap: 20px;
    grid-template-columns: 3fr 2fr 1fr;
  }
`;

export const LinkLabel = styled.div<{ title: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-shrink: 5;
  word-break: ${(props) =>
    props.title.indexOf(' ') >= 0 ? 'keep-all' : 'break-word'};
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    ${hoverEffectText}
  }
`;

export const Name = styled(Text)`
  margin-left: 5px;
  font-size: 17px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const FieldText = styled(Text)``;

export const LinkMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondaryText};
`;
