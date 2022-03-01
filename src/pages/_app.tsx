import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "../components/AuthGuard";
import { GlobalStyles } from "../theme/globalStyles";
import { theme } from "../theme/theme";
import { AppProps } from "next/app";

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
              <div id="portal" />
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
