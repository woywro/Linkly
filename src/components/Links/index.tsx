import { StyledLinks } from "./style";
import Scrollbars from "react-custom-scrollbars-2";
interface Props {
  children: JSX.Element;
}

export const Links = ({ children }: Props) => {
  return <StyledLinks>{children}</StyledLinks>;
};
