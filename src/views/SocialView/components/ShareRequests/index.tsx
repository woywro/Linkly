import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { RiFolder5Fill } from "react-icons/ri";
import { TiTick, TiTimes } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { EmptyState } from "../../../../components/EmptyState";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { Text } from "../../../../components/Text";
import { updateSharedWithYou } from "../../../../redux/actions/SharedActions";
import { ShareRequestInterface } from "../../../../types/ShareRequestInterface";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import {
  Row,
  ShareRequest,
  ShareRequestsWrapper,
  StyledCategory,
  Title,
} from "./style";

export const ShareRequests = () => {
  const [shareRequests, setShareRequests] = useState<
    ShareRequestInterface[] | []
  >([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();

  useEffect(() => {
    getShareRequests();
  }, []);

  const getShareRequests = async () => {
    setLoading(true);
    await axios.get("/api/getShareRequests").then((res) => {
      setShareRequests(res.data.result.shareRequestsReceived);
      setLoading(false);
    });
  };

  const handleAcceptShareRequest = async (request: ShareRequestInterface) => {
    await axios
      .post("/api/acceptShareRequest", { id: request.id })
      .then((res) => {
        dispatch(updateSharedWithYou(res.data.result));
        setShareRequests(shareRequests.filter((e) => e.id !== request.id));
      });
  };

  const handleDeleteShareRequest = async (request: ShareRequestInterface) => {
    await axios
      .post("/api/deleteShareRequest", {
        collectionId: request.collection.id,
        email: request.receiver.email,
      })
      .then(() => {
        setShareRequests(shareRequests.filter((e) => e.id !== request.id));
      });
  };

  return (
    <ShareRequestsWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : shareRequests.length == 0 ? (
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
              <StyledCategory>
                <RiFolder5Fill
                  style={{ fill: theme.colors.yellow }}
                  size={"30px"}
                />
                <Text>{request.collection.value}</Text>
              </StyledCategory>
              <Row>
                <Button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAcceptShareRequest(request)}
                  style={{ background: theme.colors.green }}
                >
                  <TiTick />
                </Button>
                <Button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDeleteShareRequest(request)}
                  style={{ background: theme.colors.red }}
                >
                  <TiTimes />
                </Button>
              </Row>
            </ShareRequest>
          );
        })
      )}
    </ShareRequestsWrapper>
  );
};
