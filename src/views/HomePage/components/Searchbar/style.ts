import styled from "styled-components";
import breakpoints from "../../../../theme/breakpoints";

export const SearchBarWrapper = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    background-image: ${(props) => props.theme.colors.gradient};
    padding: 0;
    margin: 0;
    width: 100%;
    height: 120px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

export const StyledSearchBar = styled.div`
  width: 60%;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  @media only screen and ${breakpoints.device.sm} {
    width: 90%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 5px;
  background: white;
  margin-left: 10px;
  color: black;
  font-size: 14px;
  line-height: 21px;
  transition: all 0.3s ease;
  border-radius: 16px;
  &:focus {
    outline: none;
    transform: scale(1.02);
  }
`;
