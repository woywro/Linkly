import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { Wrapper } from "./style";

export const DangerSettings = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.email == input) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [session, input]);

  const handleDeleteAccount = useCallback(() => {
    axios.post("/api/deleteAccount").then(() => {
      signOut();
    });
  }, []);

  const handleClearLs = useCallback(() => {
    localStorage.clear();
    router.push("/");
  }, []);

  return (
    <Wrapper>
      <Text style={{ marginBottom: "10px" }}>
        Type in{" "}
        <span style={{ fontWeight: "bold" }}>{session?.user?.email}</span> to
        proceed
      </Text>
      <Input
        placeholder="type in your email"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleDeleteAccount} disabled={disabled}>
        delete account
      </Button>
      <Button onClick={handleClearLs} disabled={disabled}>
        clear local memory
      </Button>
    </Wrapper>
  );
};
