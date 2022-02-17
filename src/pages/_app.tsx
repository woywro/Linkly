import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Modal } from "../components/Modal";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}
`;

const theme = {
  colors: {
    background: "#bdd8e8",
    background1: "#EEF2F5",
  },
  shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <ViewBox>
          <button onClick={() => setIsOpen(true)}>op</button>
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div>s</div>
            <div>s</div>
          </Modal>
          <NavBar />
          <Component {...pageProps} />
        </ViewBox>
      </Wrapper>
    </ThemeProvider>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;
const ViewBox = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.colors.background1};
  border-radius: 10px;
`;
