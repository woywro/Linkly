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
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Button } from "../../../../components/Button";

interface Props {
  item: LinkInterface;
}

export const FeedItem = ({ category }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => {
        router.push({
          pathname: `/social/${category.shareId}`,
        });
        console.log(category);
      }}
    >
      <Label>
        <RiFolder5Fill style={{ fill: theme.colors.yellow }} size={"60px"} />
        <Name>{category.value}</Name>
      </Label>
      <Text color={theme.colors.secondaryText}>{category.owner.email}</Text>
      <Text color={theme.colors.secondaryText}>{category.links.length}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow};
    color: white;
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const Name = styled(Text)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.primaryText};
`;
