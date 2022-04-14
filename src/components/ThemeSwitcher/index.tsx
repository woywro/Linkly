import { useDispatch } from "react-redux";
import styled, { useTheme } from "styled-components";
import { switchTheme } from "../../redux/actions/ThemeActions";
import breakpoints from "../../theme/breakpoints";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  themeDefault,
  themeDefaultDark,
  themeOrange,
  themePink,
  themeDarkBlue,
  themeSocial,
  themeKashmir,
  themeDeepBlue,
} from "../../theme/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { ThemeInterface } from "../../types/ThemeInterface";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");
  const [visible, setVisible] = useState(false);
  const theme = useTheme() as ThemeInterface;

  const handleChangeTheme = (e, theme) => {
    e.stopPropagation();
    setChoosenTheme(theme);
    dispatch(switchTheme(theme));
  };
  return (
    <ThemeSwitcherWrapper isVisible={visible}>
      <Row
        isVisible={visible}
        key={visible}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
          },
        }}
      >
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeDarkBlue)}
          background={themeDarkBlue.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeKashmir)}
          background={themeKashmir.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeDeepBlue)}
          background={themeDeepBlue.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeSocial)}
          background={themeSocial.colors.gradient}
        ></ThemeChoiceButton>
      </Row>
      <Row isVisible={true}>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeDefault)}
          background={themeDefault.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themePink)}
          background={themePink.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeDefaultDark)}
          background={themeDefaultDark.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, themeOrange)}
          background={themeOrange.colors.gradient}
        ></ThemeChoiceButton>
      </Row>
      <ThemeExpandButton
        whileTap={{ scale: 0.9 }}
        onClick={() => setVisible(!visible)}
        background={theme.colors.gradient}
      >
        {visible ? <BsChevronDown /> : <BsChevronUp />}
      </ThemeExpandButton>
    </ThemeSwitcherWrapper>
  );
};

const ThemeExpandButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const Row = styled(motion.div)<{ isVisible?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;

const ThemeSwitcherWrapper = styled.div<{ isVisible?: boolean }>`
  background: ${(props) =>
    props.isVisible ? props.theme.colors.primaryBg : "none"};
  height: ${(props) => (props.isVisible ? "100%" : "auto")};
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
  z-index: 2000;
  border-radius: 30px;
  padding-bottom: 15px;
  bottom: 0;
  @media only screen and ${breakpoints.device.sm} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 30px;
    position: static;
  }
  @media only screen and ${breakpoints.device.lg} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 30px;
    position: static;
  }
`;

const ThemeChoiceButton = styled(motion.button)<{ background: string }>`
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
`;
