import { useSelector } from "react-redux";
import { EmptyState } from "../../../../components/EmptyState";
import { FeedItem } from "../FeedItem";
import { FeedWrapper } from "./style";

export const Feed = () => {
  const sharedWithYou = useSelector((state) => state.sharedWithYou);

  return (
    <FeedWrapper>
      {sharedWithYou.length == 0 ? (
        <EmptyState msg="You don't have shares" />
      ) : (
        sharedWithYou.map((col) => {
          return <FeedItem collection={col} />;
        })
      )}
    </FeedWrapper>
  );
};
