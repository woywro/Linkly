import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { LinkInterface } from "../../../../types/LinkInterface";
import moment from "moment";
import { HistoryLinkInterface } from "../../../../types/HistoryLinkInterface";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  opacity: 0.5;
  margin: 5px;
  width: 100%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;
interface Props {
  item: HistoryLinkInterface;
}

export const HistoryItem = ({ item }: Props) => {
  const handleOnClick = (item) => {
    // dispatch(updateHistory(item));
    // window.open(item.url, "_blank");
  };
  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Text bold>{item.title}</Text>
      <Text>{moment(item.timestamp).format("LT")}</Text>
    </Wrapper>
  );
};
