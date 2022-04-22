import styled from 'styled-components';
import { Text } from '../../../../components/Text';
import { hoverEffectBg } from '../../../../mixins/hoverEffects';

export const StyledCategory = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Title = styled(Text)`
  font-size: 17px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`;

export const ShareRequestsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  height: 100%;
`;

export const ShareRequest = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  position: relative;
  color: ${(props) => props.theme.colors.primaryText};
  background: ${(props) => props.theme.colors.primaryBg};
  margin-bottom: 10px;
`;
