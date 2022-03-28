import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { MobileNavBar } from "../components/MobileNavBar";
import { NavBar } from "../components/NavBar";
import { AuthGuard } from "../HOC/AuthGuard";
import useMediaQuery from "../hooks/useMediaQuery";
import store from "../redux/store";
import breakpoints from "../theme/breakpoints";
import { GlobalStyles } from "../theme/globalStyles";
import { themeDefault } from "../theme/theme";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, status, ...pageProps },
}: AppProps) {
  const [theme, setTheme] = useState(themeDefault);
  const [choosenTheme, setChoosenTheme] = useLocalStorage("theme", "");

  useEffect(() => {
    if (choosenTheme !== "") {
      setTheme(choosenTheme);
    }
  }, [choosenTheme]);

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
              <ViewBox>
                <AuthGuard>
                  <MobileNavBar />
                  <NavBar setTheme={setTheme} />
                  <Component {...pageProps} />
                </AuthGuard>
              </ViewBox>
            </Wrapper>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
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
  padding: 0;
  background-color: #8ec5fc;
  background-image: ${(props) => props.theme.colors.gradient};

  @media only screen and ${breakpoints.device.sm} {
  }
  @media only screen and ${breakpoints.device.lg} {
    background: blue;
  }
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
  @media only screen and ${breakpoints.device.sm} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
`;
