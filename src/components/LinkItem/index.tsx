import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text";
import { LinkInterface } from "../../types/LinkInterface";
import { deleteLink, updateHistory } from "../../redux/actions";
import { useTheme } from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";
import { Button } from "../Button";
import { useCallback, useEffect, useState } from "react";
import { DropdownMenu } from "../DropdownMenu";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import { hoverEffectBg, hoverEffectText } from "../../mixins/hoverEffects";

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    ${hoverEffectBg}
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    ${hoverEffectText}
  }
`;

const Name = styled(Text)`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const DropDownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 20px;
`;

interface Props {
  item: LinkInterface;
}

export const LinkItem = ({ item }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleOnClick = useCallback(
    async (item: LinkInterface) => {
      dispatch(updateHistory(item));
      await axios.post("/api/addHistory", {
        linkId: item.id,
      });
      // window.open(item.url, "_blank");
    },
    [item]
  );

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

  const handleEditLink = () => {
    console.log(item);
    router.push({
      pathname: `/editLink/${item.id}`,
      query: { data: JSON.stringify(item) },
    });
  };

  return (
    <Wrapper onClick={() => handleOnClick(item)}>
      <Label>
        <AiOutlineLink />
        <Name>{item.title}</Name>
      </Label>
      <Text color={theme.colors.secondaryText}>{item.owner.email}</Text>
      <Text color={theme.colors.secondaryText}>
        {moment(parseInt(item.modificationTimestamp)).format("lll")}
      </Text>
      <MoreButton onClick={handleOpenMenu}>
        <CgMoreAlt size={"20px"} />
      </MoreButton>
      <DropdownMenu show={show}>
        <DropDownButton onClick={(e) => handleDeleteLink(e, item)}>
          Delete
        </DropDownButton>
        {/* <Link href={`/editLink/${item.id}`} passHref> */}
        <DropDownButton
          onClick={(e) => {
            handleEditLink();
            e.stopPropagation();
          }}
        >
          Edit
        </DropDownButton>
        {/* </Link> */}
      </DropdownMenu>
    </Wrapper>
  );
};
