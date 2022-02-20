import styled from "styled-components";
import { Text } from "../Text";
import { generateHistory } from "../../utils/generateHistory";
import { useEffect } from "react";
import { updateHistory } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: white;
  opacity: 0.5;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
`;

export const Link = ({ item }) => {
  const dispatch = useDispatch();
  const History = useSelector((state) => state.history);

  const handleOnClick = (item) => {
    console.log(item);
    dispatch(updateHistory(item));
    console.log(History);
  };

  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Text bold>{item.name}</Text>
      <Text>{item.url}</Text>
    </Wrapper>
  );
};
