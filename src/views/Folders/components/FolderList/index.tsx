import { RiFolder2Fill } from "react-icons/ri";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

export const FolderList = () => {
  const Links = useSelector((state) => state.links);
  const [categories, setCategories] = useState([]);

  const generateCategories = () => {
    const categories: string[] = [];
    Links.map((e) => {
      e.tags.map((x) => {
        if (x.type == "category") {
          categories.push(x);
        }
      });
    });
    const uniqueCategories = [...new Set(categories)];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    generateCategories();
  }, []);

  return (
    <List>
      {categories.map((e) => {
        return <p>{e}</p>;
      })}
      <div>s</div>
    </List>
  );
};
