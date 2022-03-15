import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import Link from "next/link";
import { useTheme } from "styled-components";

export const Category = ({ name, id }) => {
  const theme = useTheme();
  return (
    <Link href={`/categories/${id}`} passHref>
      <StyledCategory>
        <RiFolder5Fill style={{ fill: theme.colors.secondary }} size={"60px"} />
        <Title>{name}</Title>
      </StyledCategory>
    </Link>
  );
};

const StyledCategory = styled.div`
  padding: 5px;
  display: flex;
  height: 120px;
  width: 200px;
  margin: 10px;
  flex: 0 0 auto;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;

const Title = styled(Text)`
  margin-top: 5px;
  font-size: 20px;
`;
