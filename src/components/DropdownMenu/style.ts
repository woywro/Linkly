import styled from "styled-components";

export const StyledMenu = styled.div<{ show: boolean }>`
  justify-content: center;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 70%;
  right: 10%;
  width: auto;
  height: auto;
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
`;
