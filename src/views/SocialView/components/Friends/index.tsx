import axios from "axios";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Text } from "../../../../components/Text";
import { hoverEffectText } from "../../../../mixins/hoverEffects";
import { useSession } from "next-auth/react";

export const Friends = () => {
  return <Container></Container>;
};

const FriendRequest = styled.div`
  background: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;

const Follower = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    ${hoverEffectText}
  }
  &::after {
    content: "X";
    position: absolute;
    right: 20px;
    display: none;
  }
  &:hover::after {
    display: block;
  }
  &::before {
    content: "";
    position: absolute;
    left: -5px;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: ${(props) => props.theme.colors.primary};
  }
`;
