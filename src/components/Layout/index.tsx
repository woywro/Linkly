import { MobileNavBar } from '../MobileNavBar';
import { NavBar } from '../NavBar';
import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <Wrapper>
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
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </MotionWrapper>
      </ViewBox>
    </Wrapper>
  );
};

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
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  border-radius: 20px;
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
