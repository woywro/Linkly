import { useRouter } from "next/router";
import { BasicInfo } from "./components/BasicInfo";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../HomePage/components/Links";
import { LinkInterface } from "../../types/LinkInterface";
import { PageContainer, LeftWrapper, RightWrapper, PageTitle } from "../style";
import { useEffect, useState } from "react";
import { Sharing } from "./components/Sharing";
import axios from "axios";
import { useDispatch } from "react-redux";

interface Props {
  links: LinkInterface[];
}

export const CategoryView = ({ links }: Props) => {
  const { asPath, query } = useRouter();
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();

  const getTag = async () => {
    const id = query.category;
    await axios
      .get("/api/getSpecifiedTag", {
        params: {
          id,
        },
      })
      .then((res) => {
        setTag(res.data.tag);
        console.log(res.data.tag);
      });
  };
  useEffect(() => {
    getTag();
  }, [asPath, query]);

  return (
    <PageContainer>
      <LeftWrapper>
        <PageTitle>{`categories/${tag.value}`}</PageTitle>
        <Links>
          {links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper>
        <PageTitle>Info</PageTitle>
        <BasicInfo links={links} tag={tag} />
        <Sharing tag={tag} />
      </RightWrapper>
    </PageContainer>
  );
};
