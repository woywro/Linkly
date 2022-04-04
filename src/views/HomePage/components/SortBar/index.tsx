import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown, BsChevronUp, BsXLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { setLinks, sortLinks } from "../../../../redux/actions/LinkActions";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import {
  Field,
  IconButton,
  SearchContainer,
  SortBarWrapper,
  TextInput,
} from "./style";

export const SortBar = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByOwner, setSortByOwner] = useState(false);
  const [sortByModification, setSortByModification] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();

  const handleSortByName = () => {
    resetSorting();
    setSortByName(!sortByName);
    if (sortByName == true) {
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

  const handleSearchByName = () => {
    axios
      .get("/api/searchLinksByName", { params: { search: searchValue } })
      .then((res) => {
        dispatch(setLinks(res.data.link));
      });
  };

  const handleStopSearch = () => {
    setSearchMode(false);
    setSearchValue("");
  };

  useEffect(() => {
    handleSearchByName();
  }, [searchValue]);

  return (
    <SortBarWrapper>
      <Field>
        {searchMode == false ? (
          <>
            <AiOutlineSearch />
            <Text
              bold
              color={theme.colors.primaryText}
              onClick={() => {
                setSearchMode(!searchMode);
              }}
            >
              NAME
            </Text>
            <IconButton onClick={handleSortByName}>
              {sortByName == true ? <BsChevronDown /> : <BsChevronUp />}
            </IconButton>
          </>
        ) : (
          <SearchContainer>
            <TextInput
              autoFocus
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton
              onClick={() => {
                handleStopSearch();
              }}
            >
              <BsXLg />
            </IconButton>
          </SearchContainer>
        )}
      </Field>
      <Field>
        <Text bold color={theme.colors.primaryText}>
          OWNER
        </Text>
        <IconButton onClick={handleSortByOwner}>
          {sortByOwner == true ? <BsChevronDown /> : <BsChevronUp />}
        </IconButton>
      </Field>
      <Field>
        <Text bold color={theme.colors.primaryText}>
          LAST MODIFIED
        </Text>
        <IconButton onClick={handleSortByModification}>
          {sortByModification == true ? <BsChevronDown /> : <BsChevronUp />}
        </IconButton>
      </Field>
      <Field>
        <Text bold color={theme.colors.primaryText}>
          MORE
        </Text>
      </Field>
    </SortBarWrapper>
  );
};
