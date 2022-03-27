import { AiOutlineLink } from "react-icons/ai";
import { LinkInterface } from "../../../../types/LinkInterface";
import { Label, Name, SharedLinkWrapper } from "./style";

export const SharedLink = ({ link }: LinkInterface) => {
  return (
    <SharedLinkWrapper>
      <Label>
        <AiOutlineLink />
        <Name>{link.title}</Name>
      </Label>
    </SharedLinkWrapper>
  );
};
