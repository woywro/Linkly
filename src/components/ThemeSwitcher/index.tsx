import React, { MouseEvent, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/actions/ThemeActions';
import * as allThemes from '../../theme/theme';
import {
  Column,
  Row,
  ThemeChoiceButton,
  ThemeExpandButton,
  ThemeSwitcherWrapper,
} from './style';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  console.log(allThemes);
  const [choosenTheme, setChoosenTheme] = useLocalStorage('theme', '');
  const [visible, setVisible] = useState(false);

  const handleChangeTheme = (e: MouseEvent, theme: any) => {
    e.stopPropagation();
    setChoosenTheme(theme);
    setVisible(false);
    dispatch(switchTheme(theme));
  };
  return (
    <ThemeSwitcherWrapper isVisible={visible}>
      <Column isVisible={visible}>
        <Row
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
            onClick={(e) => handleChangeTheme(e, allThemes.theme9)}
            background={allThemes.theme9.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme10)}
            background={allThemes.theme10.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme11)}
            background={allThemes.theme11.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme12)}
            background={allThemes.theme12.colors.gradient}
          ></ThemeChoiceButton>
        </Row>
        <Row
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
            onClick={(e) => handleChangeTheme(e, allThemes.theme5)}
            background={allThemes.theme5.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme6)}
            background={allThemes.theme6.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme8)}
            background={allThemes.theme8.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, allThemes.theme7)}
            background={allThemes.theme7.colors.gradient}
          ></ThemeChoiceButton>
        </Row>
      </Column>
      <Row>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, allThemes.theme1)}
          background={allThemes.theme1.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, allThemes.theme2)}
          background={allThemes.theme2.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, allThemes.theme3)}
          background={allThemes.theme3.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, allThemes.theme4)}
          background={allThemes.theme4.colors.gradient}
        ></ThemeChoiceButton>
      </Row>
      <ThemeExpandButton
        whileTap={{ scale: 0.9 }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <BsChevronDown size={'18px'} />
        ) : (
          <BsChevronUp size={'18px'} />
        )}
      </ThemeExpandButton>
    </ThemeSwitcherWrapper>
  );
};
