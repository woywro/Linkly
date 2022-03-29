import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Text } from "../../../../components/Text";
import { setLinks, sortLinks } from "../../../../redux/actions/LinkActions";
import { Field, IconButton, SortDropdownWrapper } from "./style";

export const SortDropdown = ({ show }) => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByOwner, setSortByOwner] = useState(false);
  const [sortByModification, setSortByModification] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSortByName = () => {
    setSortByName(!sortByName);
    if (sortByName == true) {
      dispatch(sortLinks("asc"));
    } else {
      dispatch(sortLinks("desc"));
    }
  };
  const handleSortByOwner = () => {
    setSortByOwner(!sortByOwner);
    if (sortByName == true) {
      dispatch(sortLinks("ownerAsc"));
    } else {
      dispatch(sortLinks("ownerDesc"));
    }
  };
  const handleSortByModification = () => {
    setSortByModification(!sortByModification);
    if (sortByModification == true) {
      dispatch(sortLinks("modifiedAsc"));
    } else {
      dispatch(sortLinks("modifiedDesc"));
    }
  };

  const handleSearchByName = () => {
    axios
      .get("/api/searchLinksByName", { params: { search: searchValue } })
      .then((res) => {
        dispatch(setLinks(res.data.link));
      });
  };

  useEffect(() => {
    handleSearchByName();
  }, [searchValue]);

  return (
    <SortDropdownWrapper>
      <DropdownMenu show={show}>
        <Field onClick={handleSortByName}>
          <Text color={theme.colors.primaryText}>NAME</Text>
          <IconButton>
            {sortByName == true ? <BsChevronDown /> : <BsChevronUp />}
          </IconButton>
        </Field>
        <Field onClick={handleSortByOwner}>
          <Text color={theme.colors.primaryText}>OWNER</Text>
          <IconButton>
            {sortByOwner == true ? <BsChevronDown /> : <BsChevronUp />}
          </IconButton>
        </Field>
        <Field onClick={handleSortByModification}>
          <Text color={theme.colors.primaryText}>LAST MODIFIED</Text>
          <IconButton>
            {sortByModification == true ? <BsChevronDown /> : <BsChevronUp />}
          </IconButton>
        </Field>
      </DropdownMenu>
    </SortDropdownWrapper>
  );
};
