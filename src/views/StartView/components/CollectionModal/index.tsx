import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../../style';
import { Link } from '../Link';

export const CollectionModal = ({ selected, setSelected }) => {
  return (
    <CollectionDetailed layoutId={selected.id} color={selected.color}>
      <Title>{selected.value}</Title>
      {selected.links.map((e) => {
        return <Link link={e} />;
      })}
      <CloseButton onClick={() => setSelected('')}>x</CloseButton>
    </CollectionDetailed>
  );
};

const CollectionDetailed = styled(motion.ul)<{ color: string }>`
  background: red;
  width: 60vh;
  height: 60vh;
  position: absolute;
  background: ${(props) =>
    props.color ? props.color : 'rgba(255,255,255,0.7)'};
  border-radius: 20px;
  padding: 20px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;
