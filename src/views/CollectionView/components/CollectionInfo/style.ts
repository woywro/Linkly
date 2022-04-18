import styled from "styled-components";
export const CollectionInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  width: 100%;
  height: 50%;
`;
export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

export const Icon = styled.div`
  position: relative;
`;

export const ColorTag = styled.div<{ background: string }>`
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 0;
  top: 0;
  background: ${(props) => props.background};
`;
