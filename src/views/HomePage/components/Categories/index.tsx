import styled from "styled-components";
import { Category } from "../Category";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const StyledCategories = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  width: 100%;
  height: 30%;
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
      <Category name={"programowanie"} />
    </StyledCategories>
  );
};
