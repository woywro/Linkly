import { StyledButton } from './style';

interface Props {
  onClick: () => void;
}

export const CloseWrapperButton = ({ onClick }: Props) => {
  return <StyledButton onClick={onClick}>x</StyledButton>;
};
