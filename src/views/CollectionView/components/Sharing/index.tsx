import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { useCallback } from "react";
import { Input } from "../../../../components/Input";
import { hoverEffectText } from "../../../../mixins/hoverEffects";
import { useDispatch } from "react-redux";
import { createShare } from "../../../../redux/actions";
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
    if (collection.share.length > 0) {
      setSharedList(collection.share[0].sharedWith);
    }
  }, [collection, router]);

  const handleSave = useCallback(
    (sharedList) => {
      dispatch(createShare(router.query.collectionId, sharedList));
    },
    [sharedList]
  );

  const handleAdd = useCallback(() => {
    setSharedList([...sharedList, input]);
    handleSave([...sharedList, input]);
    setInput("");
  }, [input]);

  const handleDelete = useCallback(
    (e) => {
      const listFiltered = sharedList.filter((x) => {
        return x !== e.target.innerText;
      });
      setSharedList(listFiltered);
      handleSave(listFiltered);
    },
    [sharedList]
  );

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
                <SharedEmail onClick={(e) => handleDelete(e)}>{e}</SharedEmail>
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

const SharedEmail = styled.div`
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
    left: -5px;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: ${(props) => props.theme.colors.primary};
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