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
  background: #0a91f8;
`;
const ViewBox = styled.div`
  width: 90vw;
  height: 85vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 30px;
  box-shadow: 0px 0px 0px 18px rgba(255, 255, 255, 0.3);
`;
