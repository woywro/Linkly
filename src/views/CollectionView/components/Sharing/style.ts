import styled from "styled-components";
import { Input } from "../../../../components/Input";
import { hoverEffectText } from "../../../../mixins/hoverEffects";

export const StyledInput = styled(Input)`
  padding: 0 10px;
  background: ${(props) => props.theme.colors.primaryBg};
`;

export const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  aling-items: center;
  padding: 5px;
`;

export const SharedList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 10px;
`;

export const SharedEmail = styled.div<{ isAccepted: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    ${hoverEffectText}
  }
  &::after {
    content: "X";
    position: absolute;
    right: 20px;
    display: none;
  }
  &:hover::after {
    display: block;
  }
  &::before {
    content: "";
    position: absolute;
    left: -7px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${(props) => {
      if (props.isAccepted == true) {
        return props.theme.colors.green;
      } else {
        return props.theme.colors.red;
      }
    }};
  }
`;

export const SharingWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
  padding-top: 0;
`;
