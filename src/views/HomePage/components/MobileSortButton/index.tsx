import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";
import { Links } from "../../../../components/Links";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../theme/breakpoints";
import { Title } from "../../../style";
import { SortBar } from "../SortBar";
import Scrollbars from "react-custom-scrollbars-2";
import { SortDropdown } from "../SortDropdown";
import { Button } from "../../../../components/Button";
import styled from "styled-components";
import { useState } from "react";
import { BsXLg, BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Text } from "../../../../components/Text";

export const MobileSortButton = ({ showMobileSort, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Text color="white">sort</Text>
      <MobileSortButtonIcon>
        {showMobileSort == true ? (
          <BsChevronDown style={{ fill: "white" }} />
        ) : (
          <BsChevronUp style={{ fill: "white" }} />
        )}
      </MobileSortButtonIcon>
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
const MobileSortButtonIcon = styled.div`
  margin-left: 5px;
`;
