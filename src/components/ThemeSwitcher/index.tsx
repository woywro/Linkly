import { useDispatch } from "react-redux";
import styled from "styled-components";
import { switchTheme } from "../../redux/actions/themeActions";
import breakpoints from "../../theme/breakpoints";
import {
  themeDefault,
  themeDefaultDark,
  themeOrange,
  themePink,
} from "../../theme/theme";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const handleChangeTheme = (e, theme) => {
    e.stopPropagation();
    dispatch(switchTheme(theme));
  };
  return (
    <ThemeSwitcherWrapper>
      <Row>
        <ThemeChoiceButton
          onClick={(e) => handleChangeTheme(e, themeDefault)}
          background={themeDefault.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          onClick={(e) => handleChangeTheme(e, themePink)}
          background={themePink.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          onClick={(e) => handleChangeTheme(e, themeDefaultDark)}
          background={themeDefaultDark.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          onClick={(e) => handleChangeTheme(e, themeOrange)}
          background={themeOrange.colors.gradient}
        ></ThemeChoiceButton>
      </Row>
    </ThemeSwitcherWrapper>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ThemeSwitcherWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 30px;
  }
  @media only screen and ${breakpoints.device.lg} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 30px;
  }
`;

const ThemeChoiceButton = styled.button<{ background: string }>`
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
`;
