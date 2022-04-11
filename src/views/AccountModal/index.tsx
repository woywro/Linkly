import styled from "styled-components";
import { DangerSettings } from "./components/DangerSettings";
import { AccountDetails } from "./components/AccountDetails";
import { Divider } from "../style";

export const AccountModal = () => {
  return (
    <ModalWrapper>
      <AccountDetails />
      <Divider />
      <DangerSettings />
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
`;
