import { useState } from "react";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import { Text } from "../Text";
import styled, { useTheme } from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  themeDefault,
  themeDefaultDark,
  themeOrange,
  themePink,
} from "../../theme/theme";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { switchTheme } from "../../redux/actions/themeActions";
import { useDispatch } from "react-redux";

export const ThemeSwitcher = () => {
  const [show, setShow] = useState(false);
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleChangeTheme = (e) => {
    const value = e.target.innerText;
    if (value === "default (light)") {
      dispatch(switchTheme(themeDefault));
      setChoosenTheme(themeDefault);
    } else if (value === "default (dark)") {
      dispatch(switchTheme(themeDefaultDark));
      setChoosenTheme(themeDefaultDark);
    } else if (value == "orange (dark)") {
      dispatch(switchTheme(themeOrange));
      setChoosenTheme(themeOrange);
    } else if (value == "pink (light)") {
      dispatch(switchTheme(themePink));
      setChoosenTheme(themePink);
    }
    setShow(false);
  };
  return (
    <ThemeSwitcherWrapper>
      <DropdownMenu title={"theme"} icon={true} fullWidth={true}>
        <ThemeChoiceButton onClick={handleChangeTheme}>
          default (light)
        </ThemeChoiceButton>
        <ThemeChoiceButton onClick={handleChangeTheme}>
          pink (light)
        </ThemeChoiceButton>
        <ThemeChoiceButton onClick={handleChangeTheme}>
          default (dark)
        </ThemeChoiceButton>
        <ThemeChoiceButton onClick={handleChangeTheme}>
          orange (dark)
        </ThemeChoiceButton>
      </DropdownMenu>
    </ThemeSwitcherWrapper>
  );
};

const ThemeSwitcherWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeChoiceButton = styled(Button)`
  width: 100%;
  margin: 0;
  border-radius: none;
  background: none;
  color: ${(props) => props.theme.colors.primaryText};
`;
