import { DropdownMenuWrapper } from "./style";

interface Props {
  show: boolean;
  children: JSX.Element[];
  fullWidth: boolean;
}

export const DropdownMenu = ({ show, children, fullWidth }: Props) => {
  return (
    <DropdownMenuWrapper show={show} fullWidth={fullWidth}>
      {children}
    </DropdownMenuWrapper>
  );
};
