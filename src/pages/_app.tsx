import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Modal } from "../components/Modal";
import { Add } from "../views/Add";
import { useRouter } from "next/router";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";

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
    primary: "#0094ff",
    secondary: "#A8A8A8",
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
  background: white;
`;
const ViewBox = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow};
  background: #0094ff;
  border-radius: 10px;
`;
