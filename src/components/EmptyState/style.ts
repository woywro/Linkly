import styled from "styled-components";
export const EmptyStateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryBg};
  border-radius: 30px;
  padding: 20px;
`;
