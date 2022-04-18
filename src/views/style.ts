import styled from "styled-components";
import breakpoints from "../theme/breakpoints";
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    flex-flow: column;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 75%;
  height: 100%;
  background: white;
  text-align: left;
  padding: 20px;
  background: ${(props) => props.theme.colors.primaryBg};

  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    padding: 0px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 65%;
  }
`;
export const RightWrapper = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-flow: column;
  width: 25%;
  height: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: white;
  text-align: left;
  padding: 10px;
  background: ${(props) => props.theme.colors.secondaryBg};
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    height: 80%;
    bottom: 0;
    padding: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 102;
    display: ${({ open }) => (open ? "flex" : "none")};
    transform: ${({ open }) => (open ? "translateX(0)" : "translate(-100%)")};
    transition: transform 0.3s ease-in-out;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 35%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 5px;
  position: relative;
  @media only screen and ${breakpoints.device.sm} {
    justify-content: space-between;
  }
  @media only screen and ${breakpoints.device.lg} {
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  padding: 10px;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background: ${(props) => props.theme.colors.secondary};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
`;
