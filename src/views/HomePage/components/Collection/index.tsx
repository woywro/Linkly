import Link from "next/link";
import { RiFolder5Fill } from "react-icons/ri";
import styled, { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";

interface Props {
  name: string;
  id: string;
}

export const Collection = ({ name, id }: Props) => {
  const theme = useTheme();
  return (
    <Link href={`/collections/${id}`} passHref>
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
  width: 120px;
  margin: 5px;
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
