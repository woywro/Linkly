import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Text } from "../../../../components/Text";
import axios from "axios";
import { useEffect } from "react";

export const AccountDetails = () => {
  const { data: session, status } = useSession();

  const getStats = () => {
    axios.get("/api/countStats").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <Wrapper>
      <Stat style={{ top: "0", left: "0" }}>x</Stat>
      <Stat style={{ bottom: "0", left: "0" }}>y</Stat>
      <BiUser size={"50px"} />
      <Text>{session?.user?.name}</Text>
      <Stat style={{ top: "0", right: "0" }}>c</Stat>
      <Stat style={{ bottom: "0", right: "0" }}>z</Stat>
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

const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: absolute;
  margin: 10px;
`;
