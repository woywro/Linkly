import styled from 'styled-components';
import { Text } from '../../../../components/Text';

export const SharedLinkWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.secondaryBg};
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;

export const Name = styled(Text)`
  margin-left: 5px;
  word-break: keep-all;
`;
