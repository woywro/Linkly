import { StyledMenu } from "./style";

interface Props {
  show: boolean;
  children: JSX.Element[];
}

export const DropdownMenu = ({ show, children }: Props) => {
  return <StyledMenu show={show}>{children}</StyledMenu>;
};
