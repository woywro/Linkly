import { useSelector } from 'react-redux';
import styled from 'styled-components';
import bg1 from '../../public/img/bg1.png';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Text } from '../../components/Text';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Title } from '../style';
import { CollectionInterface } from '../../types/CollectionInterface';
import { RootState } from '../../redux/store';
import { CollectionModal } from './components/CollectionModal';
import axios from 'axios';
import { useEffect } from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { useRouter } from 'next/router';

export const StartView = ({ collections }) => {
  const [selected, setSelected] = useState<CollectionInterface>();
  const router = useRouter();
  return (
    <Wrapper>
      <BackToAppButton onClick={() => router.push('/')}>
        <AiFillAppstore size={25} />
      </BackToAppButton>
      <ItemsWrapper>
        <Title>Collections</Title>
        <Collections>
          {collections.map((e: CollectionInterface) => {
            return (
              <Collection
                whileTap={{ scale: 0.9 }}
                key={e.id}
                color={e.color}
                layoutId={e.id}
                onClick={() => setSelected(e)}
              >
                <Text>{e.value}</Text>
              </Collection>
            );
          })}
        </Collections>
      </ItemsWrapper>
      {selected && (
        <AnimatePresence>
          <CollectionModal selected={selected} setSelected={setSelected} />
        </AnimatePresence>
      )}
    </Wrapper>
  );
};

const BackToAppButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Collections = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  -moz-scrollbars-horizontal: touch;
  overflow: scroll;
`;

const Collection = styled(motion.div)<{ color: string }>`
  display: flex;
  cursor: pointer;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  width: 250px;
  margin: 10px;
  background-color: ${(props) =>
    props.color ? props.color : 'rgba(0,0,0,0.7)'};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(/img/bg1.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsWrapper = styled.div`
  width: 60vw;
  height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: start;
`;
