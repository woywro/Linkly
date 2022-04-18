import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateCollection } from "../../../../redux/actions/CollectionActions";
import { CollectionInterface } from "../../../../types/CollectionInterface";

interface Props {
  setCollection: (arg0: CollectionInterface) => void;
}

export const ColorTagSwitcher = ({ setCollection }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChangeTag = (color: string) => {
    axios
      .post("/api/updateCollectionTag", {
        id: router.query.collectionId,
        color: color,
      })
      .then((res) => {
        dispatch(updateCollection(res.data));
        setCollection(res.data);
      });
  };
  const colors: string[] = [
    "#ee616a",
    "#f283d2",
    "#32aefd",
    "#e7c331",
    "#7f4ebf",
    "#19cdaa",
    "#4f66c3",
  ];
  return (
    <ColorSwitcherWrapper>
      {colors.map((e) => {
        return (
          <ColorTag
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChangeTag(e)}
            background={e}
          />
        );
      })}
    </ColorSwitcherWrapper>
  );
};

const ColorSwitcherWrapper = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  border-radius: 30px;
  padding: 5px;
`;

const ColorTag = styled(motion.button)<{ background: string }>`
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
`;
