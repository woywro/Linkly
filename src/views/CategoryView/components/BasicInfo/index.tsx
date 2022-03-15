import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
import { TagInterface } from "../../../../types/TagInterface";
import { LinkInterface } from "../../../../types/LinkInterface";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/Button";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../../../../redux/actions";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  width: 100%;
  height: 50%;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

interface Props {
  links: LinkInterface[];
  tag: TagInterface;
}

export const BasicInfo = ({ links, tag }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);

  const handleDeleteCategory = async () => {
    await axios.post("/api/deleteTag", { id: tag.id }).then((res) => {
      dispatch(setTags(tags.filter((e) => e.value !== res.data.value)));
    });
    router.push("/");
  };

  return (
    <Wrapper>
      <Name>
        <RiFolder5Fill size={"80px"} color={theme.colors.primary} />
        <Text size={"big"} color={theme.colors.primaryText}>
          {tag.value}
        </Text>
      </Name>
      <Text size={"medium"} color={theme.colors.secondaryText}>
        links: {links.length}
      </Text>
      <Button onClick={handleDeleteCategory}>Delete Category</Button>
    </Wrapper>
  );
};
