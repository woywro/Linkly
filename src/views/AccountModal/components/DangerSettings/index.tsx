import styled from "styled-components";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Input } from "../../../../components/Input";

export const DangerSettings = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.email == input) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [session, input]);

  const handleDeleteAccount = () => {
    axios.post("/api/deleteAccount").then(() => {
      signOut();
    });
  };

  const handleClearData = () => {
    axios.post("/api/clearData");
    window.location.reload();
  };

  const handleClearLs = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <Wrapper>
      <Text style={{ marginBottom: "10px" }}>
        Type in <span style={{ fontWeight: "bold" }}>{session.user.email}</span>{" "}
        to proceed
      </Text>
      <Input
        placeholder="type in your email"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleDeleteAccount} disabled={disabled}>
        delete account
      </Button>
      <Button onClick={handleClearData} disabled={disabled}>
        clear data
      </Button>
      <Button onClick={handleClearLs} disabled={disabled}>
        clear local memory
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
