import styled from "styled-components";
import { Text } from "../Text";
import { generateHistory } from "../../utils/generateHistory";
import { useEffect } from "react";
import { updateHistory } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { LinkInterface } from "../../types/LinkInterface";

const Wrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${(props) =>
    props.color !== undefined ? props.color : "white"};
  opacity: 0.5;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
`;
interface Props {
  item: LinkInterface;
  color?: string;
}

export const LinkItem = ({ item, color }: Props) => {
  const dispatch = useDispatch();
  const History = useSelector((state) => state.history);

  const handleOnClick = (item: LinkInterface) => {
    console.log(item);
    dispatch(updateHistory(item));
    console.log(History);
    // window.open(item.url, "_blank");
  };

  return (
    <Wrapper onClick={() => handleOnClick(item)} color={color}>
      <Text bold>{item.name}</Text>
      <Text size="small">{item.url}</Text>
    </Wrapper>
  );
};
