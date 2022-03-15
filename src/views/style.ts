import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
`;
export const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: start;
  width: 75%;
  height: 100%;
  background: white;
  text-align: left;
  padding: 20px;
  background: ${(props) => props.theme.colors.primaryBg};
`;
export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-flow: column;
  width: 25%;
  height: 100%;
  border-radius: 30px;
  background: white;
  text-align: left;
  padding: 10px;
  background: ${(props) => props.theme.colors.secondaryBg};
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  margin: 10px;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background: ${(props) => props.theme.colors.blue};
`;
