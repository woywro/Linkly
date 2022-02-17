import styled from "styled-components";
import { Text } from "../../../../components/Text";

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background: ${(props) => props.bg};
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
`;

interface Props {
  title: string;
  col: string;
  row: string;
  bg: string;
}

export const ListItem = ({ title, col, row, bg }: Props) => {
  const backgrounds = [
    "white",
    "radial-gradient(#76b2fe, #b69efe)",
    "radial-gradient(#fbc1cc, #fa99b2)",
    "radial-gradient(#1fe4f5, #3fbafe)",
    "radial-gradient(#f588d8, #c0a3e5)",
    "radial-gradient(#60efbc, #58d5c9)",
  ];

  return (
    <StyledListItem column={col} row={row} bg={backgrounds[bg]}>
      <Text>{title}</Text>
    </StyledListItem>
  );
};
