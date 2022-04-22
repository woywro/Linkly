import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-x: hidden;
`;

export const SharedItemViewWrapper = styled.div`
  max-height: 300px;
  width: auto;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
`;
