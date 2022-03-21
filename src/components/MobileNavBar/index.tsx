import styled from "styled-components";
import { Text } from "../Text";
export const MobileNavBar = () => {
  return (
    <Wrapper>
      <Text>Link.ly</Text>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
`;
