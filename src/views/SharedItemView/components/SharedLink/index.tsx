import { AiOutlineLink } from "react-icons/ai";
import { LinkInterface } from "../../../../types/LinkInterface";
import { Label, Name, SharedLinkWrapper } from "./style";

interface Props {
  link: LinkInterface;
}

export const SharedLink = ({ link }: Props) => {
  return (
    <SharedLinkWrapper>
      <Label>
        <AiOutlineLink />
        <Name>{link.title}</Name>
      </Label>
    </SharedLinkWrapper>
  );
};
