import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useStore } from "react-redux";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../theme/breakpoints";
import { Divider, LeftWrapper, PageContainer, RightWrapper } from "../style";
import { CollectionList } from "./components/CollectionList";
import { History } from "./components/History";
import { LinkList } from "./components/LinkList";
import { SearchBar } from "./components/Searchbar";
import { Button } from "../../components/Button";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";

export const HomePage = () => {
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <SearchBar />
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CollectionList />
          <LinkList />
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <History />
      </RightWrapper>
    </PageContainer>
  );
};
