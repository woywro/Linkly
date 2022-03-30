import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpoints from "../../theme/breakpoints";
import { LeftWrapper, PageContainer, RightWrapper } from "../style";
import { CollectionList } from "./components/CollectionList";
import { History } from "./components/History";
import { LinkList } from "./components/LinkList";
import { SearchBar } from "./components/Searchbar";
import useLoadingGlobal from "../../hooks/useLoadingGlobal";

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar />
          <CollectionList />
          <LinkList />
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <History />
        </Scrollbars>
      </RightWrapper>
    </PageContainer>
  );
};
