import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { deleteLink } from "../../../../redux/actions/LinkActions";
import { LinkInterface } from "../../../../types/LinkInterface";
import { LinkDropdownWrapper } from "./style";
import breakpoints from "../../../../theme/breakpoints";
import { DropDownButton } from "./style";

interface Props {
  item: LinkInterface;
}

export const HomeLinkDropdown = ({ item }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  const handleDeleteLink = useCallback(async (e, item) => {
    e.stopPropagation();
    dispatch(deleteLink(item));
    await axios.post("/api/deleteLink", {
      id: item.id,
    });
  }, []);

  const handleEditLink = () => {
    router.push({
      pathname: `/editLink/${item.id}`,
      query: { data: JSON.stringify(item) },
    });
  };

  return (
    <LinkDropdownWrapper>
      <DropdownMenu icon={true} fullWidth={mediaQuerySm ? true : false}>
        <DropDownButton
          onClick={(e) => handleDeleteLink(e, item)}
          whileTap={{ scale: 0.95 }}
        >
          Delete
        </DropDownButton>
        <DropDownButton
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            handleEditLink();
            e.stopPropagation();
          }}
        >
          Edit
        </DropDownButton>
      </DropdownMenu>
    </LinkDropdownWrapper>
  );
};
