import styled from "styled-components";
import { LinkInterface } from "../../../../types/LinkInterface";

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background: ${(props) => props.color};
  width: 100%;
  height: 100px;
`;

interface Props {
  link: LinkInterface;
}

export const ListItem = ({ link }: Props) => {
  const { name, url, color, tags } = link;
  return (
    <StyledListItem color={color}>
      <p>{name}</p>
    </StyledListItem>
  );
};
