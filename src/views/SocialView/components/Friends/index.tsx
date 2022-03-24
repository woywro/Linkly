import axios from "axios";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { hoverEffectText } from "../../../../mixins/hoverEffects";
import { useSession } from "next-auth/react";

export const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [input, setInput] = useState("");
  const { data: session, status } = useSession();

  const handleCreateFriendRequest = async () => {
    console.log(input);
    axios.post("/api/createFriendRequest", {
      email: input,
    });
  };

  const getFriendRequests = async () => {
    await axios.get("/api/getShareRequests").then((res) => {
      setFriendRequests(res.data.result.shareRequestsReceived);
      console.log(res.data.result);
    });
  };

  const handleAcceptFriendRequest = async (request) => {
    await axios.post("/api/acceptShareRequest", { id: request.id });
  };

  const getFollowers = async () => {
    await axios.get("/api/getFriends").then((res) => {
      // setFollowers(res.data.request.friendUserFriends);
      const friends = [];
      console.log(res.data.result);
      res.data.result.map((e) => {
        if (e.owner.email == session.user.email) {
          friends.push(e.receiver);
        } else if (e.receiver.email == session.user.email) {
          friends.push(e.owner);
        }
      });
      console.log(friends);
    });
  };

  useEffect(() => {
    // getFollowers();
  }, []);

  return (
    <Container>
      <Input
        placeholder="enter yout friend's email"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleCreateFriendRequest}>add friend</Button>
      <Button onClick={getFriendRequests}>get requests</Button>
      <Button onClick={getFollowers}>get friends</Button>
      {friendRequests.map((request) => {
        return (
          <FriendRequest onClick={() => handleAcceptFriendRequest(request)}>
            {request.collection.value}
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
