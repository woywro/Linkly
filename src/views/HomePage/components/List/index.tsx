import styled from "styled-components";
import { Categories } from "../Categories";
import { Links } from "../Links";
import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { Text } from "../../../../components/Text";
import { useRouter } from "next/router";
import { Input } from "../../../../components/Input";

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

const ClickableText = styled(Text)`
  cursor: pointer;
`;

export const List = () => {
  const router = useRouter();
  const userLinks = useSelector((state) => state.links);
  const loadingState = useSelector((state) => state.LoadingReducer);

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
