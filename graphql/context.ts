import { PrismaClient } from '@prisma/client';
import { prisma } from '../prisma/PrismaClient';

export type Context = {
  prisma: PrismaClient;
};
export async function createContext({ req, res }): Promise<Context> {
  return {
    prisma,
  };
}
