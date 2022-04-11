import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Text } from "../../../../components/Text";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { RiFolder5Fill } from "react-icons/ri";
import { RiAddCircleLine, RiLayoutGridLine, RiTeamLine } from "react-icons/ri";

export const AccountDetails = () => {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState({
    collections: 0,
    links: 0,
    shareRequests: 0,
  });

  const getStats = () => {
    axios.get("/api/countStats").then((res) => {
      setStats(res.data);
    });
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <Wrapper>
      <BiUser size={"60px"} />
      <Text size={"big"}>{session?.user?.name}</Text>
      <Stats>
        <Stat>
          <AiOutlineLink />
          {stats.links}
        </Stat>
        <Stat>
          <RiFolder5Fill />
          {stats.collections}
        </Stat>
        <Stat>
          <RiTeamLine />
          {stats.shareRequests}
        </Stat>
      </Stats>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 30px;
  width: 100%;
  position: relative;
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row;
  width: 100%;
  padding: 5px;
  margin-top: 10px;
`;

const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
