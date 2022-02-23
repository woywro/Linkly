import styled from "styled-components";
import { Categories } from "../Categories";
import { Links } from "../../../../components/Links";

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

const Divider = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
  margin: 10px;
`;

export const List = () => {
  return (
    <StyledList>
      <Categories />
      <Divider />
      <Links />
    </StyledList>
  );
};
