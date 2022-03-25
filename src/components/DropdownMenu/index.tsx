import { DropdownMenuWrapper } from "./style";

interface Props {
  show: boolean;
  children: JSX.Element[];
}

export const DropdownMenu = ({ show, children }: Props) => {
  return <DropdownMenuWrapper show={show}>{children}</DropdownMenuWrapper>;
};
