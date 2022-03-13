import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
export const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: start;
  width: 70%;
  height: 100%;
  background: white;
  text-align: left;
  border-radius: 20px;
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
  background: white;
  border-radius: 20px;
  text-align: left;
  padding: 10px;
  background: ${(props) => props.theme.colors.primaryBg};
`;

export const PageTitle = styled.h1`
  font-size: 35px;
  margin: 5px;
  opacity: 0.5;
  position: relative;
  margin:-bottom: 10px;
  &::before {
    position: absolute;
    content: "";
    background: ${(props) => props.theme.colors.primary};
    height: 3px;
    width: 70%;
    bottom: -5px;
  }
`;
