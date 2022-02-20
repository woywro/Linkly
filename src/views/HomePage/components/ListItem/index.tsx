import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const StyledListItem = styled.li<{ bg: string; column: string; row: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding: 20px;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: ${(props) => props.bg};
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

interface Props {
  title: string;
  col: string;
  row: string;
  bg: string;
  children?: JSX.Element[];
  onClick?: () => void;
}

export const ListItem = ({ title, col, row, bg, children, onClick }: Props) => {
  const backgrounds = [
    "white",
    "radial-gradient(#76b2fe, #b69efe)",
    "radial-gradient(#fbc1cc, #fa99b2)",
    "radial-gradient(#1fe4f5, #3fbafe)",
    "radial-gradient(#f588d8, #c0a3e5)",
    "radial-gradient(#60efbc, #58d5c9)",
  ];

  return (
    <StyledListItem
      column={col}
      row={row}
      bg={backgrounds[bg]}
      onClick={onClick}
    >
      <Text size="big" color="white">
        {title}
      </Text>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledListItem>
  );
};