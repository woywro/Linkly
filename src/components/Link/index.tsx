import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text";
import { LinkInterface } from "../../types/LinkInterface";
import { updateHistory } from "../../redux/actions";
import { RiLinksFill } from "react-icons/ri";
import { useTheme } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 1fr 2fr;
  width: 100%;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface Props {
  item: LinkInterface;
}

export const Link = ({ item }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const History = useSelector((state) => state.history);

  const handleOnClick = (item: LinkInterface) => {
    console.log(item);
    dispatch(updateHistory(item));
    console.log(History);
    // window.open(item.url, "_blank");
  };

  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Label>
        <RiLinksFill />
        <Text>{item.name}</Text>
      </Label>
      <Text color={theme.colors.secondary}>{"woywro"}</Text>
      <Text color={theme.colors.secondary}>{"June,13,2020"}</Text>
    </Wrapper>
  );
};
