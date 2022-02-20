import styled from "styled-components";
import { LinkItem } from "../../../../components/LinkItem";
import { useSelector } from "react-redux";

const Wrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const LinksModal = () => {
  const Links = useSelector((state) => state.links);

  return (
    <Wrapper>
      {Links.map((e) => {
        return <LinkItem item={e} color={e.color} />;
      })}
    </Wrapper>
  );
};
