import { useState } from "react";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import { Text } from "../Text";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  themeDefault,
  themeDefaultDark,
  themeOrange,
  themePink,
} from "../../theme/theme";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ThemeSwitcher = ({ setTheme }) => {
  const [show, setShow] = useState(false);
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");
  const handleChangeTheme = (e) => {
    const value = e.target.innerText;
    if (value === "default (light)") {
      setTheme(themeDefault);
      setChoosenTheme(themeDefault);
    } else if (value === "default (dark)") {
      setTheme(themeDefaultDark);
      setChoosenTheme(themeDefaultDark);
    } else if (value == "orange (dark)") {
      setTheme(themeOrange);
      setChoosenTheme(themeOrange);
    } else if (value == "pink (light)") {
      setTheme(themePink);
      setChoosenTheme(themePink);
    }
    setShow(false);
  };
  return (
    <ThemeSwitcherWrapper>
      <ThemeSwitcherButton onClick={() => setShow(!show)}>
        theme{" "}
        {show == true ? (
          <BsChevronDown style={{ fill: "white" }} />
        ) : (
          <BsChevronUp style={{ fill: "white" }} />
        )}
      </ThemeSwitcherButton>
      <DropdownMenu show={show}>
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
  top: 30px;
  position: relative;
`;
const ThemeSwitcherButton = styled(Button)`
  width: 100%;
  margin: 0;
`;
const ThemeChoiceButton = styled(Button)`
  width: 100%;
  margin: 0;
  border-radius: none;
  background: none;
  color: ${(props) => props.theme.colors.primaryText};
`;
