import styled from "styled-components";

export const Text = styled.p<{ size?: string; bold?: boolean; color?: string }>`
  font-size: ${({ size }) => handleFontSize(size)};
  font-weight: ${({ bold }) => bold && "bold"};
  color: ${({ color }) => color};
`;

const handleFontSize = (size?: string) => {
  switch (size) {
    case "small":
      return "14px";
    case "big":
      return "24px";
    default:
      return "16px";
  }
};
