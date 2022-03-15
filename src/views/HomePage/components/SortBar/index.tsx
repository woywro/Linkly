import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";
import { useDispatch, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { BsXLg, BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { userInfo } from "os";
import { sortLinks } from "../../../../redux/actions";

export const SortBar = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByOwner, setSortByOwner] = useState(false);
  const [sortByModification, setSortByModification] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleStopSearch = () => {
    setSearchMode(false);
    setSearchValue("");
  };

  useEffect(() => {
    handleSearchByName();
  }, [searchValue]);

  return (
    <FieldLabels>
      <Field>
        {searchMode == false ? (
          <>
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
    </FieldLabels>
  );
};

const FieldLabels = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 5px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  position: relative;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.colors.primary};
  }
`;

const IconButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background: ${(props) => props.theme.colors.secondaryBg};
  }
`;

const TextInput = styled.input`
  border: none;
  font-size: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;
