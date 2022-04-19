import { motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import styled from "styled-components";
import { MobileNavBar } from "../components/MobileNavBar";
import { NavBar } from "../components/NavBar";
import { AuthGuard } from "../HOC/AuthGuard";
import { ReduxThemeProvider } from "../HOC/ReduxThemeProvider";
import { OnlineStatusProvider } from "../hooks/useOnlineStatus";
import store from "../redux/store";
import breakpoints from "../theme/breakpoints";
import { GlobalStyles } from "../theme/globalStyles";

export default function App({
  Component,
  router,
  pageProps: { session, status, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <OnlineStatusProvider>
        <Provider store={store}>
          <ReduxThemeProvider>
            <GlobalStyles />
            <Wrapper>
              <AuthGuard>
                <ViewBox>
                  <MobileNavBar />
                  <NavBar />
                  <MotionWrapper
                    key={router.pathname}
                    initial="initial"
                    animate="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                      },
                    }}
                  >
                    <Component {...pageProps} />
                    <Toaster position="bottom-right" reverseOrder={false} />
                  </MotionWrapper>
                </ViewBox>
              </AuthGuard>
              <Toaster position="bottom-right" reverseOrder={false} />
            </Wrapper>
          </ReduxThemeProvider>
        </Provider>
      </OnlineStatusProvider>
    </SessionProvider>
  );
}

const MotionWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  background: ${(props) => props.theme.colors.gradient};
  @media only screen and ${breakpoints.device.sm} {
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;
const ViewBox = styled.div`
  width: 90vw;
  height: 85vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 0px 0px 18px rgba(255, 255, 255, 0.3);
  background: ${(props) => props.theme.colors.primaryBg};
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
