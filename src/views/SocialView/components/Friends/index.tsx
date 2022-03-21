import axios from "axios";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { hoverEffectText } from "../../../../mixins/hoverEffects";

export const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [followers, setFollowers] = useState([]);
  const handleCreateFriendRequest = async () => {
    await axios.post("/api/createFriendRequest", {
      email: "woywro@gmail.com",
    });
  };

  const getFriendRequests = async () => {
    await axios.get("/api/getFriendRequest").then((res) => {
      setFriendRequests(res.data.request);
    });
  };

  const handleAcceptFriendRequest = async (e) => {
    console.log(e);
    await axios.post("/api/addFriend", { email: e.owner.email }).then((res) => {
      console.log("s");
    });
  };

  const getFollowers = async () => {
    await axios.get("/api/getFollowers").then((res) => {
      setFollowers(res.data.request);
    });
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <Container>
      <Input placeholder="enter yout friend's email" />
      <Button onClick={handleCreateFriendRequest}>add friend</Button>
      <Button onClick={getFriendRequests}>get requests</Button>
      {friendRequests.map((request) => {
        return (
          <FriendRequest onClick={() => handleAcceptFriendRequest(request)}>
            {request.owner.email}
          </FriendRequest>
        );
      })}
      <Text>followers</Text>
      {followers.map((follower) => {
        return <Follower>{follower.email}</Follower>;
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

const Follower = styled.div`
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
