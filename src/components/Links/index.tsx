import { StyledLinks } from './style';
interface Props {
  children: JSX.Element;
}

export const Links = ({ children }: Props) => {
  return <StyledLinks>{children}</StyledLinks>;
};
