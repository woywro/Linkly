import styled from "styled-components";
import { Category } from "../Category";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTags } from "../../../../redux/actions";
import { Button } from "../../../../components/Button";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const StyledCategories = styled.div`
  display: flex;
  flex-flow: row;
  height: auto;
  padding: 10px;
  width: 100%;
  overflow-x: scroll;
  -moz-scrollbars-horizontal: touch;
  flex-wrap: nowrap;
`;

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const Links = useSelector((state) => state.links);
  const Tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, [Links]);
  useEffect(() => {
    setCategories(Tags);
  }, [Tags]);

  return (
    <StyledCategories>
      {categories.map((e) => {
        return <Category name={e.value} />;
      })}
    </StyledCategories>
  );
};
