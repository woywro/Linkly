import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { generateHistory } from "../../utils/generateHistory";
import { LinkItem } from "../../components/LinkItem";
import { LinkInterface } from "../../types/LinkInterface";
import { PageTemplate } from "../../components/PageTemplate";
import { List } from "./components/List";
import { Text } from "../../components/Text";
import { History } from "./components/History";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";

export const HomePage = () => {
  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>Home</PageTitle>
        <List />
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>History</PageTitle>
        <History />
      </RightWrapper>
    </PageContainer>
  );
};
