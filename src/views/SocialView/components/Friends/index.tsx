import axios from "axios";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
export const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const handleCreateFriendRequest = async () => {
    await axios.post("/api/createFriendRequest", {
      email: "woywro@gmail.com",
    });
  };

  const getFriendRequests = async () => {
    await axios.get("/api/getFriendRequest").then((res) => {
      console.log(res.data);
      setFriendRequests(res.data.request);
    });
  };

  return (
    <Container>
      <Input placeholder="enter yout friend's email" />
      <Button onClick={handleCreateFriendRequest}>add friend</Button>
      <Button onClick={getFriendRequests}>get requests</Button>
      {friendRequests.map((e) => {
        return <FriendRequest>{e.owner.email}</FriendRequest>;
      })}
    </Container>
  );
};

const FriendRequest = styled.div`
  background: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;
