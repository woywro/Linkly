import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";
import { useDispatch, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { BsXLg, BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { sortLinks } from "../../../../redux/actions";
import { AiOutlineSearch } from "react-icons/ai";
import breakpoints from "../../../../theme/breakpoints";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import {
  hoverEffectBg,
  hoverEffectText,
} from "../../../../mixins/hoverEffects";
import useMediaQuery from "../../../../hooks/useMediaQuery";

export const SortDropdown = ({ show }) => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByOwner, setSortByOwner] = useState(false);
  const [sortByModification, setSortByModification] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);
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
    <Wrapper>
      <DropdownMenu show={show}>
        <>
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
        </>
      </DropdownMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 10px;
    cursor: pointer;
    &:hover {
      ${hoverEffectBg}
    }
  }
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
`;

const TextInput = styled.input`
  border: none;
  font-size: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5px;
`;
