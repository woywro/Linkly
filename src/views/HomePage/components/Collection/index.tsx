import Link from "next/link";
import { RiFolder5Fill } from "react-icons/ri";
import { useTheme } from "styled-components";
import { CollectionWrapper, Title } from "./style";

interface Props {
  name: string;
  id: string;
}

export const Collection = ({ name, id }: Props) => {
  const theme = useTheme();
  return (
    <Link href={`/collections/${id}`} passHref>
      <CollectionWrapper>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"60px"} />
        <Title>{name}</Title>
      </CollectionWrapper>
    </Link>
  );
};
