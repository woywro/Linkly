import Link from "next/link";
import { RiFolder5Fill } from "react-icons/ri";
import { useTheme } from "styled-components";
import { ShareRequestInterface } from "../../../../types/ShareRequestInterface";
import { CollectionWrapper, Title, SharedIcon, Icon } from "./style";
import { AiFillCloud } from "react-icons/ai";
import { ThemeInterface } from "../../../../types/ThemeInterface";

interface Props {
  name: string;
  id: string;
  shareRequests: ShareRequestInterface[];
}

export const Collection = ({ name, id, shareRequests }: Props) => {
  const theme = useTheme() as ThemeInterface;
  return (
    <Link href={`/collections/${id}`} passHref>
      <CollectionWrapper whileTap={{ scale: 0.9 }}>
        <Icon>
          {shareRequests.length > 0 && (
            <SharedIcon>
              <AiFillCloud
                size={"20px"}
                style={{ fill: theme.colors.primaryBg }}
              />
            </SharedIcon>
          )}
          <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"60px"} />
        </Icon>
        <Title>{name}</Title>
      </CollectionWrapper>
    </Link>
  );
};
