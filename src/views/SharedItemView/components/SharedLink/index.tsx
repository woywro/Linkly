import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";
import { useCallback, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "../../../../components/Text";
import { LinkInterface } from "../../../../types/LinkInterface";

interface Props {
  item: LinkInterface;
}

export const SharedLink = ({ link }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label>
        <AiOutlineLink />
        <Name>{link.title}</Name>
      </Label>
      <Text color={theme.colors.secondary}>{link.url.slice(0, 20)}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  &:hover {
    background: ${(props) => props.theme.colors.active2};
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.active};
    text-decoration-thickness: 3px;
  }
`;

const Name = styled(Text)`
  margin-left: 5px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secondary};
`;

const DropDownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;
