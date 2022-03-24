import { useRouter } from "next/router";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, Title } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";
import styled, { useTheme } from "styled-components";
import { SharedLink } from "./components/SharedLink";
import { Text } from "../../components/Text";

interface Props {
  links: LinkInterface[];
}

export const SharedItemView = ({ share }) => {
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.secondary}>{share.collection.owner.email}</Text>
      <List>
        {share.collection.links.map((link) => {
          return <SharedLink link={link} />;
        })}
      </List>
    </Container>
  );
};

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
`;
