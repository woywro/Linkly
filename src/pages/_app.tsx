import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { Add } from "../views/Add";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";
import { LinksModal } from "../views/HomePage/components/LinksModal";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Lato', sans-serif;
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
  const router = useRouter();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <ViewBox>
            <Modal
              title={"Add Link"}
              open={router.pathname == "/add" ? true : false}
              onClose={() => {
                router.push("/");
              }}
            >
              <Add />
            </Modal>
            <Modal
              title={"All links"}
              open={router.pathname == "/links" ? true : false}
              onClose={() => {
                router.push("/");
              }}
            >
              <LinksModal />
            </Modal>
            <NavBar />
            <Component {...pageProps} />
            <div id="portal" />
          </ViewBox>
        </Wrapper>
      </ThemeProvider>
    </Provider>
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
