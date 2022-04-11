import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiFolder5Fill, RiTeamLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { Text } from "../../../../components/Text";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import { Stat, Stats, Wrapper } from "./style";

export const AccountDetails = () => {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState({
    collections: 0,
    links: 0,
    shareRequests: 0,
  });
  const theme = useTheme() as ThemeInterface;

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
      <BiUser size={"60px"} style={{ fill: theme.colors.secondary }} />
      <Text size={"big"}>
        {session?.user?.name !== null
          ? session?.user?.name
          : session?.user?.email}
      </Text>
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
