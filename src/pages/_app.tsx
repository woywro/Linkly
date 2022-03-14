import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "../HOC/AuthGuard";
import { GlobalStyles } from "../theme/globalStyles";
import { theme } from "../theme/theme";
import { AppProps } from "next/app";
import { useSession } from "next-auth/react";
import Login from "./login";

export default function App({
  Component,
  pageProps: { session, status, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Wrapper>
            <ViewBox>
              <AuthGuard>
                <NavBar />
                <Component {...pageProps} />
              </AuthGuard>
            </ViewBox>
          </Wrapper>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 0%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 70%;
    right: 0;
    background-color: ${(props) => props.theme.colors.primary};
    height: 20%;
  }
`;
const ViewBox = styled.div`
  width: 85vw;
  height: 80vh;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 10px;
`;
