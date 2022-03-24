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
import { MobileSortButton } from "../MobileSortButton";
import { EmptyState } from "../../../../components/EmptyState";

export const LinkList = () => {
  const userLinks = useSelector((state) => state.links);
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);
  const [showMobileSort, setShowMobileSort] = useState(false);

  return (
    <Links>
      <Row>
        <Title>Links</Title>
        <MobileSortButton
          onClick={() => setShowMobileSort(!showMobileSort)}
          showMobileSort={showMobileSort}
        />
        <SortDropdown show={showMobileSort} />
      </Row>
      <SortBar />
      {userLinks.length == 0 ? (
        <EmptyState msg="You don't have links" />
      ) : (
        userLinks.map((e) => {
          return <LinkItem item={e} />;
        })
      )}
    </Links>
  );
};

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
