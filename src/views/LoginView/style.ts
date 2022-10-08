import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 20px;
  background: ${(props) => props.theme.colors.primaryBg};
  border-radius: 10px;
  @media only screen and ${breakpoints.device.sm} {
    border-radius: 0px;
    width: 100%;
    height: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    border-radius: 0px;
    width: 100%;
    height: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
  width: 70%;
  margin-bottom: 50px;
  @media only screen and ${breakpoints.device.sm} {
    margin-bottom: 20px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin-bottom: 10px;
  }
`;
export const StyledInput = styled(Input)`
  margin: 15px;
  width: 70%;
  @media only screen and ${breakpoints.device.sm} {
    margin: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;
export const Title = styled(Text)`
  font-size: 50px;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 30px;
  }
  @media only screen and ${breakpoints.device.lg} {
    font-size: 30px;
  }
`;

export const LoginButton = styled(Button)`
  border-radius: 10px;
  width: 50%;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  margin-top: 10px;
  @media only screen and ${breakpoints.device.sm} {
    padding: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    padding: 5px;
  }
`;

export const Divider = styled.div`
  width: 60%;
  background: ${(props) => props.theme.colors.secondaryBg};
  height: 1px;
  margin: 20px;
  @media only screen and ${breakpoints.device.sm} {
    margin: 10px;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  padding: 5px;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
    margin: 5px;
  }
`;
