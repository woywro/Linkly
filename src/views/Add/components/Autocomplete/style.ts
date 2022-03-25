import styled from "styled-components";
import { Text } from "../../../../components/Text";

export const SuggesionsWrapper = styled.ul`
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${(props) => props.theme.colors.secondary};
`;
export const AutocompleteWrapper = styled.div`
  border: none;
  position: relative;
  background: ${(props) => props.theme.colors.secondaryBg};
  padding: 25px 10px;
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
  background: white;
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

export const TypeChoice = styled(Text)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;
