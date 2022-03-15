import { useRouter } from "next/router";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";
import styled, { useTheme } from "styled-components";
import { SharedLink } from "./components/SharedLink";
import { Text } from "../../components/Text";

interface Props {
  links: LinkInterface[];
}

export const SharedItemView = ({ share }) => {
  const { asPath, query } = useRouter();
  const [tag, setTag] = useState();
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.secondary}>{share.category.owner.email}</Text>
      {share.category.links.map((link) => {
        return <SharedLink link={link} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
`;
