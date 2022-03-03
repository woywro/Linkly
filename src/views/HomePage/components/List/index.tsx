import styled from "styled-components";
import { Categories } from "../Categories";
import { Links } from "../../../../components/Links";
import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";

const StyledList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 4fr 1fr 8fr;
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
  const loadingState = useSelector((state) => state.LoadingReducer);
  useEffect(() => {
    console.log(loadingState);
  }, [loadingState]);

  return (
    <StyledList>
      {loadingState.loading == true ? (
        <LoadingSpinner />
      ) : (
        <>
          <Categories />
          <Divider />
          <Links>
            {userLinks.map((e) => {
              return <LinkItem item={e} />;
            })}
          </Links>
        </>
      )}
    </StyledList>
  );
};
