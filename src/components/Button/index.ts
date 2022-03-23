import styled, { css } from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border: 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
