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
    </Wrapper>
  );
};

const Wrapper = styled.li`
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
    background: ${(props) => props.theme.colors.secondaryBg};
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;

const Name = styled(Text)`
  margin-left: 5px;
`;
