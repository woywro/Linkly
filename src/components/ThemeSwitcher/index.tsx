<<<<<<< HEAD
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { switchTheme } from '../../redux/actions/ThemeActions';
import breakpoints from '../../theme/breakpoints';
import {
  theme5,
  theme8,
  theme1,
  theme4,
  theme6,
  theme2,
  theme7,
  theme3,
  theme9,
  theme10,
  theme11,
  theme12,
} from '../../theme/theme';
import { ThemeInterface } from '../../types/ThemeInterface';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [choosenTheme, setChoosenTheme] = useLocalStorage('theme', '');
  const [visible, setVisible] = useState(false);
  const theme = useTheme() as ThemeInterface;
=======
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
>>>>>>> development

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
<<<<<<< HEAD
            onClick={(e) => handleChangeTheme(e, theme9)}
            background={theme9.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme10)}
            background={theme10.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme11)}
            background={theme11.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme12)}
            background={theme12.colors.gradient}
          ></ThemeChoiceButton>
        </Row>
        <Row
          isVisible={visible}
=======
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
>>>>>>> development
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
<<<<<<< HEAD
            onClick={(e) => handleChangeTheme(e, theme5)}
            background={theme5.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme6)}
            background={theme6.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme8)}
            background={theme8.colors.gradient}
          ></ThemeChoiceButton>
          <ThemeChoiceButton
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleChangeTheme(e, theme7)}
            background={theme7.colors.gradient}
          ></ThemeChoiceButton>
        </Row>
      </Column>
      <Row isVisible={true}>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, theme1)}
          background={theme1.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, theme2)}
          background={theme2.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, theme3)}
          background={theme3.colors.gradient}
        ></ThemeChoiceButton>
        <ThemeChoiceButton
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleChangeTheme(e, theme4)}
          background={theme4.colors.gradient}
=======
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
>>>>>>> development
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
<<<<<<< HEAD

const ThemeExpandButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  bottom: 0;
  padding: 2px;
  cursor: pointer;
  @media only screen and ${breakpoints.device.sm} {
    bottom 5px;
  }
  @media only screen and ${breakpoints.device.lg} {
    bottom 5px;

  }
`;

const Row = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Column = styled.div<{ isVisible?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  width: 100%;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;

const ThemeSwitcherWrapper = styled.div<{ isVisible?: boolean }>`
  background: ${(props) =>
    props.isVisible ? props.theme.colors.primaryBg : 'none'};
  height: ${(props) => (props.isVisible ? '100%' : 'auto')};
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
  border-radius: 20px;
  padding-bottom: 16px;
  bottom: 0;
  @media only screen and ${breakpoints.device.sm} {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 20px;
    position: static;
  }
  @media only screen and ${breakpoints.device.lg} {
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 20px;
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
=======
>>>>>>> development
