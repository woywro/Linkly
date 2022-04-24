import { useSelector } from 'react-redux';
import styled from 'styled-components';
import bg1 from '../../public/img/bg1.png';
import { collections } from '../redux/reducers/CollectionReducer';
import { RootState } from '../redux/store';
import { Title } from '../views/style';
import { Text } from '../components/Text';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CollectionInterface } from '../types/CollectionInterface';
import { StartView } from '../views/StartView';
import { getSession } from 'next-auth/react';
import { prisma } from '../../prisma/PrismaClient';

export default function Start({ collections }) {
  return <StartView collections={collections} />;
}

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const result = await prisma.Collection.findMany({
    orderBy: {
      modificationTimestamp: 'desc',
    },
    where: {
      owner: { email: session.user.email },
    },
    select: {
      id: true,
      value: true,
      modificationTimestamp: true,
      color: true,
      links: true,
    },
  });
  const collections = JSON.parse(JSON.stringify(result));

  if (!collections) {
    return {
      notFound: true,
    };
  }
  return {
    props: { collections },
  };
}
