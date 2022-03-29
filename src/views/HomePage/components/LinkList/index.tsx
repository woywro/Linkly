import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components/Button";
import { EmptyState } from "../../../../components/EmptyState";
import { LinkItem } from "../../../../components/LinkItem";
import { Links } from "../../../../components/Links";
import { RootState } from "../../../../redux/store";
import { Title } from "../../../style";
import { MobileSortButton } from "../MobileSortButton";
import { SortBar } from "../SortBar";
import { SortDropdown } from "../SortDropdown";
import { Row } from "./style";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";
import useLoading from "../../../../hooks/useLoading";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";

export const LinkList = () => {
  const userLinks = useSelector((state: RootState) => state.links);
  const [showMobileSort, setShowMobileSort] = useState(false);
  const dispatch = useDispatch();
  const request = useSelector((state) => state.requestsLoading);
  const loading = useLoading(request, "getLinks");
  // const [loading, setLoading] = useState(false)

  const handleLoadMore = useCallback(() => {
    // setLoading(true);
    axios
      .get("/api/getLinks", {
        params: { cursor: userLinks[userLinks.length - 1].id },
      })
      .then((res) => {
        dispatch(setLinks(userLinks.concat(res.data.link)));
        // setLoading(false);
      });
  }, [userLinks]);

  return (
    <Links>
      {loading == true ? (
        <LoadingSpinner />
      ) : (
        <>
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
            <>
              {userLinks.map((e) => {
                return <LinkItem item={e} />;
              })}
              {/* {loading && <div>loading</div>} */}
              <Button onClick={handleLoadMore}>Load more</Button>
            </>
          )}
        </>
      )}
    </Links>
  );
};
