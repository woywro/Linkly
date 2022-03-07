import styled from "styled-components";
import { Category } from "../Category";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 10px;
`;

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const Tags = useSelector((state) => state.tags);

  useEffect(() => {
    const tagsFiltered = Tags.filter((e) => e.type == "category");
    setCategories(tagsFiltered);
  }, [Tags]);

  return (
    <StyledCategories>
      {categories.map((e) => {
        return <Category name={e.value} />;
      })}
    </StyledCategories>
  );
};
