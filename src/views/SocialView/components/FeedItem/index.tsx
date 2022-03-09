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

interface Props {
  item: LinkInterface;
}

export const FeedItem = ({ category }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        router.push(`/social/${categoryid}`);
        console.log(category);
      }}
    >
      <Label>
        <RiFolder5Fill />
        <Name>{category.value}</Name>
      </Label>
      <Text color={theme.colors.secondary}>{category.owner.email}</Text>
      <Text color={theme.colors.secondary}>{"June,13,2020"}</Text>
      <Text color={theme.colors.secondary}>{category.links.length}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  width: 100%;
  padding: 15px;
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
  font-size: 30px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.active};
    text-decoration-thickness: 3px;
  }
`;

const Name = styled(Text)`
  margin-left: 10px;
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
