import styled from "styled-components";

export const DropdownMenuWrapper = styled.div<{ show: boolean }>`
  justify-content: center;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
`;
