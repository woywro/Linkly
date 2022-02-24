import styled from "styled-components";
import { Text } from "../../../../components/Text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  opacity: 0.5;
  margin: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;
interface Props {
  item: LinkInterface;
  color?: string;
}

export const HistoryItem = ({ item, color }: Props) => {
  const handleOnClick = (item: LinkInterface) => {
    // dispatch(updateHistory(item));
    console.log(History);
    // window.open(item.url, "_blank");
  };

  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Text bold>{item.name}</Text>
    </Wrapper>
  );
};
