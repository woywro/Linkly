import styled from "styled-components";
import { Category } from "../Category";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../../../../redux/actions";
import { Button } from "../../../../components/Button";

const StyledCategories = styled.div`
  height: auto;
  padding: 10px;
  width: 100%;
  overflow-x: hidden;
  -moz-scrollbars-horizontal: touch;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const Links = useSelector((state) => state.links);
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [Links]);
  useEffect(() => {
    setCategories(collections);
  }, [collections]);

  return (
    <StyledCategories>
      {categories.map((e) => {
        return <Category name={e.value} id={e.id} />;
      })}
    </StyledCategories>
  );
};
