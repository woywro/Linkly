import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { EditLink } from "../views/EditLink";
import { Modal } from "../components/Modal";

export default function editLink(props) {
  const router = useRouter();
  useEffect(() => {
    console.log(JSON.parse(props.item));
  }, [props]);
  return (
    <Modal
      title={"Edit Link"}
      open={router.pathname == "/editLink" ? true : false}
      onClose={() => {
        router.push("/");
      }}
    >
      <EditLink item={JSON.parse(props.item)} />
    </Modal>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      item: context.query.item,
    },
  };
}
