import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import axios from "axios";
import { useCallback } from "react";
import { Input } from "../../../../components/Input";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid ${(props) => props.theme.colors.secondaryBg};
  overflow-y: scroll;
`;

export const Sharing = ({ tag }) => {
  const theme = useTheme();
  const router = useRouter();
  const [input, setInput] = useState("");
  const [sharedList, setSharedList] = useState([]);

  useEffect(() => {
    if (tag !== undefined) {
      setSharedList(tag.share[0].sharedWith);
    }
  }, [tag]);

  const handleSave = useCallback(
    async (sharedList) => {
      console.log(router.query);
      await axios.post("/api/createShare", {
        categoryId: router.query.category,
        sharedWith: sharedList,
      });
    },
    [sharedList]
  );

  const handleAdd = () => {
    setSharedList([...sharedList, input]);
    handleSave([...sharedList, input]);
  };
  const handleDelete = (e) => {
    const listFiltered = sharedList.filter((x) => {
      return x !== e.target.innerText;
    });
    setSharedList(listFiltered);
    handleSave(listFiltered);
  };

  return (
    <Container>
      <Wrapper>
        <Text size={"big"} color={theme.colors.primaryText}>
          Sharing:
        </Text>
        <AddWrapper>
          <Input
            placeholder="email"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleAdd}>add</Button>
        </AddWrapper>
        <SharedList>
          {sharedList.map((e) => {
            return (
              <SharedEmail onClick={(e) => handleDelete(e)}>{e}</SharedEmail>
            );
          })}
        </SharedList>
      </Wrapper>
    </Container>
  );
};

const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  aling-items: center;
  padding: 10px;
  margin-top: 10px;
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
    background: ${(props) => props.theme.colors.secondaryBg};
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
`;
