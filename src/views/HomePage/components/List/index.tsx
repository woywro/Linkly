import styled from "styled-components";
import { Categories } from "../Categories";
import { Links } from "../../../../components/Links";
import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";

const StyledList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 3fr 1fr 4fr 1fr;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Divider = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

export const List = () => {
  const userLinks = useSelector((state) => state.links);

  return (
    <StyledList>
      <Categories />
      <Divider />
      <Links>
        {userLinks.map((e) => {
          return <LinkItem item={e} />;
        })}
      </Links>
    </StyledList>
  );
};
