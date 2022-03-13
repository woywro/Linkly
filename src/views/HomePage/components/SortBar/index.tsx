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

export const SortBar = () => {
  const [sorting, setSorting] = useState("asc");
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSortByName = () => {
    if (sorting == "asc") {
      setSorting("desc");
      axios.get("/api/sortByNameDESC").then((res) => {
        dispatch(setLinks(res.data.link));
      });
    } else {
      setSorting("asc");
      axios.get("/api/sortByNameASC").then((res) => {
        dispatch(setLinks(res.data.link));
      });
    }
  };

  const handleSearchByName = () => {
    console.log(searchValue);
    axios
      .get("/api/searchLinksByName", { params: { search: searchValue } })
      .then((res) => {
        dispatch(setLinks(res.data.link));
        console.log(res.data.link);
      });
  };

  const handleStopSearch = () => {
    setSearchMode(false);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      handleSearchByName();
    }
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
              {sorting == "asc" ? <BsChevronDown /> : <BsChevronUp />}
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
      </Field>
      <Field>
        <Text bold color={theme.colors.primaryText}>
          LAST MODIFIED
        </Text>
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
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
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
