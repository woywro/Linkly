import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text";
import { LinkInterface } from "../../types/LinkInterface";
import { deleteLink, updateHistory } from "../../redux/actions";
import { useTheme } from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";
import { Button } from "../Button";
import { useCallback, useState } from "react";
import { DropdownMenu } from "../DropdownMenu";
import axios from "axios";
import Link from "next/link";

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  position: relative;
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;

const Name = styled(Text)`
  margin-left: 5px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondary};
`;

const DropDownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

interface Props {
  item: LinkInterface;
}

export const LinkItem = ({ item }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const History = useSelector((state) => state.history);
  const [show, setShow] = useState(false);

  const handleOnClick = async (item: LinkInterface) => {
    console.log(History);
    // dispatch(updateHistory(item));
    console.log(History);
    dispatch(updateHistory(item));
    await axios.post("/api/addHistory", {
      linkId: item.id,
    });
    // window.open(item.url, "_blank");
  };

  const handleOpenMenu = useCallback(
    (e) => {
      e.stopPropagation();
      console.log("menu");
      setShow(!show);
    },
    [show]
  );

  const handleDeleteLink = useCallback(
    async (e, item) => {
      e.stopPropagation();
      dispatch(deleteLink(item));
      await axios.post("/api/deleteLink", {
        id: item.id,
      });
    },
    [show]
  );

  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Label>
        <AiOutlineLink />
        <Name>{item.title}</Name>
      </Label>
      <Text color={theme.colors.secondary}>{"woywro"}</Text>
      <Text color={theme.colors.secondary}>{"June,13,2020"}</Text>
      <MoreButton onClick={handleOpenMenu}>
        <CgMoreAlt size={"20px"} />
      </MoreButton>
      <DropdownMenu show={show}>
        <DropDownButton onClick={(e) => handleDeleteLink(e, item)}>
          Delete
        </DropDownButton>
        <Link
          href={{
            pathname: "/editLink",
            query: {
              item: JSON.stringify(item),
            },
          }}
          as={`/editLink`}
          passHref
        >
          <DropDownButton
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Edit
          </DropDownButton>
        </Link>
      </DropdownMenu>
    </Wrapper>
  );
};
