import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { EditLink } from "../views/EditLink";
import { Add } from "../views/Add";
import { Modal } from "../components/Modal";

export default function AddLink() {
  const router = useRouter();

  return (
    <Modal
      title={"Add Link"}
      open={router.pathname == "/addLink" ? true : false}
      onClose={() => {
        router.push("/");
      }}
    >
      <Add />
    </Modal>
  );
}
