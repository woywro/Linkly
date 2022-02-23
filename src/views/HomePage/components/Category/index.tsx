import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import Link from "next/link";

const StyledCategory = styled.div`
  padding: 5px;
  display: flex;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Category = ({ name }) => {
  return (
    <Link href={`/categories/${name}`} passHref>
      <StyledCategory>
        <RiFolder5Fill />
        <Text>{name}</Text>
      </StyledCategory>
    </Link>
  );
};
