import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
import { TagInterface } from "../../../../types/TagInterface";
import { LinkInterface } from "../../../../types/LinkInterface";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SharingInfo } from "../SharingInfo";
import { Button } from "../../../../components/Button";
import axios from "axios";
import { setLinks } from "../../../../redux/actions";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

interface Props {
  data: LinkInterface[];
}

export const CategoryInfo = ({ data }: Props) => {
  const theme = useTheme();
  const router = useRouter();

  const handleDeleteCategory = async () => {
    console.log(data.tag[0].id);
    await axios.post("/api/deleteTag", { id: data.tag[0].id });
  };

  return (
    <Wrapper>
      <Name>
        <RiFolder5Fill size={"80px"} color={theme.colors.primary} />
        <Text size={"big"} color={theme.colors.secondary}>
          {router.query.category}
        </Text>
      </Name>
      <Text size={"medium"} color={theme.colors.secondary}>
        links: {data.length}
      </Text>
      <Button onClick={handleDeleteCategory}>Delete Category</Button>
      <SharingInfo />
    </Wrapper>
  );
};
