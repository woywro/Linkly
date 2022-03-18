import { Input } from "../../components/Input";
import { addLink, setLinks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AutoComplete } from "../Add/components/Autocomplete";
import styled from "styled-components";
import { Button } from "../../components/Button";
import axios from "axios";
import { TagInterface } from "../../types/TagInterface";
import { LinkInterface } from "../../types/LinkInterface";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { updateLink } from "../../redux/actions";

const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  link: string;
}

export const EditLink = ({ linkId }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<TagInterface[] | []>([]);
  const [link, setLink] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const allTags = useSelector((state) => state.tags);

  const getLink = async () => {
    console.log("change");
    await axios
      .get("/api/getSpecifiedLink", {
        params: {
          id: linkId,
        },
      })
      .then((res) => {
        setLink(res.data.link);
        console.log(res.data.link);
      });
  };

  useEffect(() => {
    getLink();
  }, [linkId]);

  useEffect(() => {
    setInputValues();
  }, [link]);

  const setInputValues = useCallback(() => {
    setTitle(link.title);
    setUrl(link.url);
    setTags(link.tags);
  }, [link, linkId]);

  const handleSaveLink = async () => {
    console.log(tags);
    await axios
      .post("/api/updateLink", {
        id: link.id,
        title: title,
        url: url,
        tags: tags,
      })
      .then((res) => {
        dispatch(updateLink(res.data));
      });
    // router.push("/");
  };

  return (
    <Container>
      <Input
        placeholder="name"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <Input
        placeholder="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        value={url}
      />
      <AutoComplete setTags={setTags} suggestions={allTags} tags={tags} />
      <Button onClick={handleSaveLink}>save</Button>
    </Container>
  );
};
