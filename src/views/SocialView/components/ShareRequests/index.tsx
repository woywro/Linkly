import axios from "axios";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { hoverEffectText } from "../../../../mixins/hoverEffects";
import { useSession } from "next-auth/react";
import { RiFolder5Fill } from "react-icons/ri";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateSharedWithYou } from "../../../../redux/actions";
import { EmptyState } from "../../../../components/EmptyState";

export const ShareRequests = () => {
  const [shareRequests, setShareRequests] = useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    getShareRequests();
  }, []);

  const getShareRequests = async () => {
    await axios.get("/api/getShareRequests").then((res) => {
      setShareRequests(res.data.result.shareRequestsReceived);
      console.log(res.data.result);
    });
  };

  const handleAcceptShareRequest = async (request) => {
    await axios
      .post("/api/acceptShareRequest", { id: request.id })
      .then((res) => {
        console.log(res.data.result.collection);
        dispatch(updateSharedWithYou(res.data.result.collection));
        setShareRequests(shareRequests.filter((e) => e.id !== request.id));
      });
  };
  const handleDeleteShareRequest = async (request) => {
    console.log(request);
    await axios
      .post("/api/deleteShareRequest", {
        collectionId: request.collection.id,
        email: request.receiver.email,
      })
      .then((res) => {
        setShareRequests(shareRequests.filter((e) => e.id !== request.id));
      });
  };

  return (
    <Wrapper>
      {shareRequests.length == 0 ? (
        <EmptyState msg="You don't have share requests" />
      ) : (
        shareRequests.map((request) => {
          return (
            <ShareRequest>
              <Row>
                <Title>{request.owner.email}</Title>
                <Text color={theme.colors.secondaryText}>
                  {moment(parseInt(request.createdTimestamp)).format("LT")}
                </Text>
              </Row>
              <Row>
                <StyledCategory>
                  <RiFolder5Fill
                    style={{ fill: theme.colors.yellow }}
                    size={"30px"}
                  />
                  <Text>{request.collection.value}</Text>
                </StyledCategory>
                <Button onClick={() => handleAcceptShareRequest(request)}>
                  accept
                </Button>
                <Button onClick={() => handleDeleteShareRequest(request)}>
                  x
                </Button>
              </Row>
            </ShareRequest>
          );
        })
      )}
    </Wrapper>
  );
};

const StyledCategory = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  margin: 5px;
  font-size: 50px;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const Title = styled(Text)`
  font-size: 17px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;

const ShareRequest = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  position: relative;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;
