import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Text } from "../../../../components/Text";
import { sortLinks } from "../../../../redux/actions/LinkActions";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import { Field, IconButton, SortDropdownWrapper } from "./style";

export const SortDropdown = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByOwner, setSortByOwner] = useState(false);
  const [sortByModification, setSortByModification] = useState(false);
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();

  const handleSortByName = () => {
    resetSorting();
    setSortByName(!sortByName);
    if (sortByName == false) {
      dispatch(sortLinks("asc"));
    } else {
      dispatch(sortLinks("desc"));
    }
  };

  const handleSortByOwner = () => {
    resetSorting();
    setSortByOwner(!sortByOwner);
    if (sortByName == true) {
      dispatch(sortLinks("ownerAsc"));
    } else {
      dispatch(sortLinks("ownerDesc"));
    }
  };

  const handleSortByModification = () => {
    resetSorting();
    setSortByModification(!sortByModification);
    if (sortByModification == true) {
      dispatch(sortLinks("modifiedAsc"));
    } else {
      dispatch(sortLinks("modifiedDesc"));
    }
  };

  const resetSorting = () => {
    setSortByModification(false);
    setSortByName(false);
    setSortByOwner(false);
  };

  return (
    <SortDropdownWrapper>
      <DropdownMenu icon={true} title={"sort"} fullWidth={true}>
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
