import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { switchTheme } from "../redux/actions/ThemeActions";
import { RootState } from "../redux/store";

interface Props {
  children: JSX.Element[];
}

export const ReduxThemeProvider = ({ children }: Props) => {
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");

  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (choosenTheme !== "") {
      dispatch(switchTheme(choosenTheme));
    }
  }, [choosenTheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
