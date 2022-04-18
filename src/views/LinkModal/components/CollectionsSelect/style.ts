import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  position: relative;
`;

export const SuggesionsWrapper = styled.ul`
  border-top: 1px solid gray;
  list-style: none;
  max-height: 100px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: 100%;
  right: 0;
`;
export const SelectWrapper = styled.div`
  border: none;
  position: relative;
  background: ${(props) => props.theme.colors.secondaryBgNoTransparent};
  padding: 15px 5px;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const ChoosenSuggestionList = styled.ul`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  max-height: 100px;
  overflow-y: auto;
`;

export const Error = styled(Text)`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
`;

export const ChoosenSuggestion = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 12px;
  background: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  border-radius: 20px;
  margin: 2px;
  margin-top: 10px;
  color: white;
`;
export const StyledInput = styled.input`
  border: none;
  background: none;
  position: relative;
`;

export const Suggestion = styled.li`
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.colors.secondaryBg};
`;

export const Add = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.background};
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
`;

export const AddCollectionButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13px;
  padding: 5px;
`;
