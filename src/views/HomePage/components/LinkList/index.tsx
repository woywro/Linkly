import { useState } from "react";
import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { LinkItem } from "../../../../components/LinkItem";
import { Links } from "../../../../components/Links";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { MobileSortButton } from "../MobileSortButton";
import { SortBar } from "../SortBar";
import { SortDropdown } from "../SortDropdown";
import { Row } from "./style";

export const LinkList = () => {
  const userLinks = useSelector((state: RootState) => state.links);
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
