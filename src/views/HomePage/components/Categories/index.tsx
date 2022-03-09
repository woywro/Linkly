import styled from "styled-components";
import { Category } from "../Category";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTags } from "../../../../redux/actions";

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 10px;
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
