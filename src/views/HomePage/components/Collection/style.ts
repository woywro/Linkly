import styled from "styled-components";
import { Text } from "../../../../components/Text";
export const CollectionWrapper = styled.div`
  padding: 5px;
  display: flex;
  height: 120px;
  width: 120px;
  margin: 5px;
  font-size: 50px;
  align-items: center;
  text-align: center;
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

export const Title = styled(Text)`
  margin-top: 5px;
  font-size: 20px;
`;
