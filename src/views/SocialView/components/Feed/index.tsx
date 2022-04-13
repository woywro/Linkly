import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { RootState } from "../../../../redux/store";
import { SharedWithYouInterface } from "../../../../types/SharedWithYouInterface";
import { FeedItem } from "../FeedItem";
import { FeedWrapper } from "./style";

export const Feed = () => {
  const sharedWithYou = useSelector((state: RootState) => state.sharedWithYou);

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
      {sharedWithYou.length == 0 ? (
        <EmptyState msg="You don't have shares" />
      ) : (
        <FeedWrapper>
          {sharedWithYou.map((share: SharedWithYouInterface) => {
            return <FeedItem sharedItem={share} key={share.id} />;
          })}
        </FeedWrapper>
      )}
    </Scrollbars>
  );
};
