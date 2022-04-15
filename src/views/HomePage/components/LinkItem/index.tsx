import axios from "axios";
import moment from "moment";
import { useCallback } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { updateHistory } from "../../../../redux/actions/HistoryActions";
import breakpoints from "../../../../theme/breakpoints";
import { LinkInterface } from "../../../../types/LinkInterface";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import { HomeLinkDropdown } from "../HomeLinkDropdown";
import { FieldText, LinkLabel, LinkWrapper, Name } from "./style";

interface Props {
  item: LinkInterface;
}

export const LinkItem = ({ item }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  const handleOnClick = useCallback(
    async (item: LinkInterface) => {
      dispatch(updateHistory(item));
      await axios.post("/api/addHistory", {
        linkId: item.id,
      });
      window.open(item.url, "_blank");
    },
    [item]
  );

  return (
    <LinkWrapper onClick={() => handleOnClick(item)}>
      <LinkLabel>
        <AiOutlineLink size={15} />
        <Name>{item.title}</Name>
      </LinkLabel>
      {!mediaQuerySm && (
        <>
          <FieldText color={theme.colors.secondaryText}>
            {item.owner?.email}
          </FieldText>
          <FieldText color={theme.colors.secondaryText}>
            {moment(parseInt(item.modificationTimestamp)).format("lll")}
          </FieldText>
        </>
      )}
      <HomeLinkDropdown item={item} />
    </LinkWrapper>
  );
};
