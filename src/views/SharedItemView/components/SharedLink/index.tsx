import { useCallback } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { LinkInterface } from '../../../../types/LinkInterface';
import { Label, Name, SharedLinkWrapper } from './style';

interface Props {
  link: LinkInterface;
}

export const SharedLink = ({ link }: Props) => {
  const handleOpen = () => {
    window.open(link.url, '_blank');
  };

  return (
    <SharedLinkWrapper onClick={handleOpen}>
      <Label>
        <AiOutlineLink />
        <Name>{link.title}</Name>
      </Label>
    </SharedLinkWrapper>
  );
};
