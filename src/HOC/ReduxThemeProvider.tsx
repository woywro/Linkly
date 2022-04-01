import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { themeDefault } from "../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/actions/ThemeActions";

export const ReduxThemeProvider = ({ children }) => {
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (choosenTheme !== "") {
      dispatch(switchTheme(choosenTheme));
    }
  }, [choosenTheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
