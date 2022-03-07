import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";
import { useDispatch, useStore } from "react-redux";
import { useEffect, useState } from "react";
export const SortBar = () => {
  const [sorting, setSorting] = useState("asc");
  const theme = useTheme();
  const fields = ["name", "owner", "last modified", "more"];
  const dispatch = useDispatch();

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

  return (
    <FieldLabels>
      <Field>
        <Text bold color={theme.colors.secondary}>
          NAME
        </Text>
        <IconButton onClick={handleSortByName}>
          {sorting == "asc" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </IconButton>
      </Field>
      <Field>
        <Text bold color={theme.colors.secondary}>
          owner
        </Text>
      </Field>
      <Field>
        <Text bold color={theme.colors.secondary}>
          last modified
        </Text>
      </Field>
      <Field>
        <Text bold color={theme.colors.secondary}>
          more
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
`;

const Field = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;
`;
