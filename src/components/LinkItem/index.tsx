import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { deleteLink } from "../../redux/actions/LinkActions";
import { updateHistory } from "../../redux/actions/HistoryActions";
import { LinkInterface } from "../../types/LinkInterface";
import { DropdownMenu } from "../DropdownMenu";
import { Text } from "../Text";
import {
  DropDownButton,
  LinkLabel,
  LinkMenuButton,
  Name,
  LinkWrapper,
} from "./style";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../theme/breakpoints";

interface Props {
  item: LinkInterface;
}

export const LinkItem = ({ item }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

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
    <LinkWrapper onClick={() => handleOnClick(item)}>
      <LinkLabel>
        <AiOutlineLink />
        <Name>{item.title}</Name>
      </LinkLabel>
      {!mediaQuerySm && (
        <>
          <Text color={theme.colors.secondaryText}>{item.owner.email}</Text>
          <Text color={theme.colors.secondaryText}>
            {moment(parseInt(item.modificationTimestamp)).format("lll")}
          </Text>
        </>
      )}
      <LinkMenuButton onClick={handleOpenMenu}>
        <CgMoreAlt size={"20px"} />
      </LinkMenuButton>
      <DropdownMenu show={show}>
        <DropDownButton onClick={(e) => handleDeleteLink(e, item)}>
          Delete
        </DropDownButton>
        <DropDownButton
          onClick={(e) => {
            handleEditLink();
            e.stopPropagation();
          }}
        >
          Edit
        </DropDownButton>
      </DropdownMenu>
    </LinkWrapper>
  );
};
