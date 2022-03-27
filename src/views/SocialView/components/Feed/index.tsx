import { useEffect } from "react";
import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { FeedItem } from "../FeedItem";
import { FeedWrapper } from "./style";
import Scrollbars from "react-custom-scrollbars-2";
import { SharedWithYouInterface } from "../../../../types/SharedWithYouInterface";
import { RootState } from "../../../../redux/store";

export const Feed = () => {
  const sharedWithYou = useSelector((state: RootState) => state.sharedWithYou);

  useEffect(() => {
    console.log(sharedWithYou);
  }, [sharedWithYou]);

  return (
    <Scrollbars
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FeedWrapper>
        {sharedWithYou.length == 0 ? (
          <EmptyState msg="You don't have shares" />
        ) : (
          sharedWithYou.map((share: SharedWithYouInterface) => {
            return <FeedItem sharedItem={share} key={share.id} />;
          })
        )}
      </FeedWrapper>
    </Scrollbars>
  );
};
