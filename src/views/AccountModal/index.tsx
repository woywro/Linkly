import { Button } from "../../components/Button";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Text } from "../../components/Text";

export const AccountModal = () => {
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

  return (
    <div>
      <Text>
        Type in <span style={{ fontWeight: "bold" }}>{session.user.email}</span>{" "}
        to delete
      </Text>
      <Input
        placeholder="type in your email"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleDeleteAccount} disabled={disabled}>
        delete account
      </Button>
    </div>
  );
};
