import styled from "styled-components";
import { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 100%;
`;

const Color = styled.div<{ isActive: boolean; color: string }>`
  background: ${(props) => props.color};
  width: 20px;
  height: 20px;
  margin: 10px;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      border-radius: 20px;
    `}
`;

interface Props {
  setColor: () => void;
  color: string;
}

export const ColorChoice = ({ setColor, color }: Props) => {
  const colors = ["red", "blue", "green", "yellow"];
  return (
    <Wrapper>
      {colors.map((e) => {
        return (
          <Color
            color={e}
            onClick={() => setColor(e)}
            isActive={color == e ? true : false}
          />
        );
      })}
    </Wrapper>
  );
};
