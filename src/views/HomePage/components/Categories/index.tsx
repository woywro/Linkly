import styled from "styled-components";
import { Category } from "../Category";

const StyledCategories = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  width: 100%;
  height: 30%;
`;

export const Categories = () => {
  return (
    <StyledCategories>
      <Category name={"programowanie"} />
      <Category name={"school"} />
    </StyledCategories>
  );
};
