import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import Link from "next/link";

const StyledCategory = styled.div`
  padding: 5px;
  display: flex;
  height: 100%;
  width: 150px;
  flex: 0 0 auto;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background: ${(props) => props.theme.colors.active2};
  }
`;

const Title = styled(Text)`
  margin-top: 5px;
  font-size: 20px;
`;

export const Category = ({ name }) => {
  return (
    <Link href={`/categories/${name}`} passHref>
      <StyledCategory>
        <RiFolder5Fill />
        <Title>{name}</Title>
      </StyledCategory>
    </Link>
  );
};
