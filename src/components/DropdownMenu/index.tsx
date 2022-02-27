import styled from "styled-components";

const StyledMenu = styled.div`
  justify-content: center;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 70%;
  right: 10%;
  width: 20%;
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

export const DropdownMenu = ({ show, children }) => {
  return <StyledMenu show={show}>{children}</StyledMenu>;
};
