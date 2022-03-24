import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { hoverEffectText } from "../../../../mixins/hoverEffects";
import { CollectionInterface } from "../../../../types/CollectionInterface";

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
    <Container>
      <Wrapper>
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
            <EmptyList>
              <Text>Add people to start sharing this category!</Text>
            </EmptyList>
          )}
        </SharedList>
      </Wrapper>
    </Container>
  );
};

const EmptyList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  aling-items: center;
`;

const StyledInput = styled(Input)`
  padding: 0 10px;
`;

const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  aling-items: center;
  padding: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SharedList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 10px;
`;

const SharedEmail = styled.div<{ isAccepted: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    ${hoverEffectText}
  }
  &::after {
    content: "X";
    position: absolute;
    right: 20px;
    display: none;
  }
  &:hover::after {
    display: block;
  }
  &::before {
    content: "";
    position: absolute;
    left: -7px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${(props) => {
      if (props.isAccepted == true) {
        return props.theme.colors.green;
      } else {
        return props.theme.colors.red;
      }
    }};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
  padding-top: 0;
`;
