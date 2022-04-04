import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Text } from "../../../../components/Text";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { updateHistory } from "../../../../redux/actions/HistoryActions";
import { deleteLink } from "../../../../redux/actions/LinkActions";
import breakpoints from "../../../../theme/breakpoints";
import { LinkInterface } from "../../../../types/LinkInterface";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import {
  DropDownButton,
  LinkDropdownWrapper,
  LinkLabel,
  LinkWrapper,
  Name,
} from "./style";

interface Props {
  item: LinkInterface;
  setLinks: (arg0: LinkInterface[]) => void;
  links: LinkInterface[];
}

export const CollectionLinkItem = ({ item, setLinks, links }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const router = useRouter();
  const dispatch = useDispatch();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  const handleOnClick = useCallback(
    async (item: LinkInterface) => {
      dispatch(updateHistory(item));
      await axios.post("/api/addHistory", {
        linkId: item.id,
      });
      window.open(item?.url?, "_blank");
    },
    [item]
  );

  const handleDeleteLink = useCallback(
    async (e, item) => {
      e.stopPropagation();
      dispatch(deleteLink(item));
      await axios.post("/api/deleteLink", {
        id: item.id,
      });
      const linksFiltered: LinkInterface[] = links.filter(
        (x) => x.id !== item.id
      );
      setLinks(linksFiltered);
    },
    [links]
  );

  const handleEditLink = () => {
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
          <Text color={theme.colors.secondaryText}>{item.owner?.email}</Text>
          <Text color={theme.colors.secondaryText}>
            {moment(parseInt(item.modificationTimestamp)).format("lll")}
          </Text>
        </>
      )}
      <LinkDropdownWrapper>
        <DropdownMenu icon={true} fullWidth={mediaQuerySm ? true : false}>
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
      </LinkDropdownWrapper>
    </LinkWrapper>
  );
};
