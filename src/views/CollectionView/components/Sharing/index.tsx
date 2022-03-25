import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../components/Button";
import { EmptyState } from "../../../../components/EmptyState";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import {
  AddWrapper,
  SharingWrapper,
  SharedEmail,
  SharedList,
  StyledInput,
} from "./style";

interface Props {
  collection: CollectionInterface;
}

export const Sharing = ({ collection }: Props) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [sharedList, setSharedList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const sharedWith = [];
    if (collection.shareRequests.length !== 0) {
      collection.shareRequests.map((request) => {
        sharedWith.push({
          email: request.receiverEmail,
          isAccepted: request.isAccepted,
        });
      });
      setSharedList(sharedWith);
    }
  }, [collection, router]);

  const handleAdd = useCallback(() => {
    axios
      .post("/api/createShareRequest", {
        collectionId: router.query.collectionId,
        email: input,
      })
      .then(() => {
        setSharedList([
          ...sharedList,
          { email: input, collectionId: router.query.collectionId },
        ]);
      })
      .catch((err) => {
        alert(err.response.data);
      });
    setInput("");
  }, [router, input, sharedList]);

  const handleDelete = (e) => {
    axios.post("/api/deleteShareRequest", {
      email: e,
      collectionId: router.query.collectionId,
    });
    setSharedList(sharedList.filter((x) => x.email !== e));
  };
  return (
    <SharingWrapper>
      <AddWrapper>
        <StyledInput
          placeholder="email"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleAdd}>add</Button>
      </AddWrapper>
      <SharedList>
        {sharedList.length > 0 ? (
          sharedList.map((e) => {
            return (
              <SharedEmail
                onClick={() => handleDelete(e.email)}
                isAccepted={e.isAccepted}
              >
                {e.email}
              </SharedEmail>
            );
          })
        ) : (
          <EmptyState msg="add people to start sharing this collection!" />
        )}
      </SharedList>
    </SharingWrapper>
  );
};
