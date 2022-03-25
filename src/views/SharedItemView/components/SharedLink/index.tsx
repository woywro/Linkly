import { useRouter } from "next/router";
import { AiOutlineLink } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { LinkInterface } from "../../../../types/LinkInterface";
import { Label, Name, SharedLinkWrapper } from "./style";

interface Props {
  item: LinkInterface;
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
