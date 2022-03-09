import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export const ShareView = () => {
  const [input, setInput] = useState("");
  const [sharedList, setSharedList] = useState(["dd"]);
  const router = useRouter();

  const handleAdd = () => {
    setSharedList([...sharedList, input]);
  };

  const handleSave = useCallback(async () => {
    const sharedWith = sharedList;
    console.log(sharedList);
    console.log(router.query);
    await axios.post("/api/createShare", {
      categoryId: router.query.share,
      sharedWith: sharedWith,
    });
  }, [sharedList]);

  return (
    <Container>
      <Input placeholder="email" onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleAdd}>add</Button>
      <SharedList>
        {sharedList.map((e) => {
          return <div>{e}</div>;
        })}
      </SharedList>
      <Button onClick={handleSave}>save</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;
const SharedList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;
