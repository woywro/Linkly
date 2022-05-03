import { CgDetailsMore } from 'react-icons/cg';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../types/ThemeInterface';
import { StyledButton } from './style';

interface Props {
  onClick: () => void;
}

export const OpenWrapperButton = ({ onClick }: Props) => {
  const theme = useTheme() as ThemeInterface;
  return (
    <StyledButton onClick={onClick} whileTap={{ scale: 0.9 }}>
      <CgDetailsMore size={25} />
    </StyledButton>
  );
};
