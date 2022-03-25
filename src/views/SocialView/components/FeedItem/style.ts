import styled from "styled-components";
import { Text } from "../../../../components/Text";

export const FeedItemWrapper = styled.div`
  padding: 20px;
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Name = styled(Text)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.primaryText};
`;
